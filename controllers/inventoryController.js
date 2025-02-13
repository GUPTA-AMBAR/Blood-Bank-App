const inventoryModels = require('../models/inventory.models');
const userModels = require('../models/user.models');
const mongoose = require("mongoose");


const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType, bloodGroup, quantity, organisation } = req.body;

        if (!email || !inventoryType || !bloodGroup || !quantity || !organisation) {
            return res.status(400).send({ success: false, message: "All fields are required" });
        }

        const user = await userModels.findOne({ email });
        if (!user) {
            return res.status(404).send({ success: false, message: "User not found" });
        }

        if (inventoryType === "out") {
            const orgId = new mongoose.Types.ObjectId(organisation);

            // Calculate total blood quantity
            const totalInData = await inventoryModels.aggregate([
                { $match: { organisation: orgId, bloodGroup, inventoryType: "in" } },
                { $group: { _id: "$bloodGroup", total: { $sum: "$quantity" } } }
            ]);
            const totalIn = totalInData.length > 0 ? totalInData[0].total : 0;

            const totalOutData = await inventoryModels.aggregate([
                { $match: { organisation: orgId, bloodGroup, inventoryType: "out" } },
                { $group: { _id: "$bloodGroup", total: { $sum: "$quantity" } } }
            ]);
            const totalOut = totalOutData.length > 0 ? totalOutData[0].total : 0;

            const availableQuantity = totalIn - totalOut;
            if (availableQuantity < quantity) {
                return res.status(400).send({
                    success: false,
                    message: `Only ${availableQuantity}ml of ${bloodGroup.toUpperCase()} is available`
                });
            }

            req.body.hospitals = user?._id;
        } else {
            req.body.donar = user?._id;
        }

        const inventory = new inventoryModels(req.body);
        await inventory.save();

        return res.status(201).send({
            success: true,
            message: "New blood record added successfully!",
            inventory
        });
    } catch (error) {
        console.error("Error creating inventory:", error);
        return res.status(500).send({
            success: false,
            message: "Error creating inventory",
            error: error.message
        });
    }
};



const getinventoryController = async (req, res) => {
    try {
        const organisation = req.query.organisation || req.user?.organisation;

        // Fetch inventory data
        const inventory = await inventoryModels
            .find(organisation ? { organisation } : {})
            .populate("donar")
            .populate("hospitals")
            .sort({ createdAt: -1 });

        if (!inventory || inventory.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No inventory found",
            });
        }

        console.log("Fetched inventory:", inventory);

        return res.status(200).send({
            success: true,
            message: "Inventory retrieved successfully",
            inventory,
        });
    } catch (error) {
        console.error("Error fetching inventory:", error);
        return res.status(500).send({
            success: false,
            message: "Error fetching inventory",
            error: error.message,
        });
    }
};

// GET Hospital BLOOD RECORS
const getInventoryHospitalController = async (req, res) => {
    try {
        const inventory = await inventoryModels
            .find(req.body.filters)
            .populate("donar")
            .populate("hospitals")
            .populate("organisation")
            .sort({ createdAt: -1 });
        return res.status(200).send({
            success: true,
            messaage: "get hospital comsumer records successfully",
            inventory,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Get consumer Inventory",
            error,
        });
    }
};

// GET DONAR REOCRDS
const getDonarsController = async (req, res) => {
    try {
        const organisation = req.body.userId;
        console.log("organisation:", organisation);

        const donarId = await inventoryModels.distinct("donar", {
            organisation,
        });
        const donars = await userModels.find({ _id: { $in: donarId } });
        console.log("donars iD : ", donarId);


        return res.status(200).send({
            success: true,
            message: "Donar Record Fetched Successfully",
            donars,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Donar records",
            error,
        });
    }
};


// GET hospitals REOCRDS
const getHospitalsController = async (req, res) => {
    try {
        const organisation = req.body.userId;
        const hospitalsId = await inventoryModels.distinct("hospitals", {
            organisation,
        });
        const hospitals = await userModels.find({ _id: { $in: hospitalsId } });
        console.log("hospitals : ", hospitals);

        return res.status(200).send({
            success: true,
            message: "hospitals Record Fetched Successfully",
            hospitals,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in hospitals records",
            error,
        });
    }
};

// GET organisation REOCRDS
const getOrganisationsController = async (req, res) => {
    try {
        const donar = req.body.userId;
        const orgId = await inventoryModels.distinct("organisation", { donar });
        const organisation = await userModels.find({ _id: { $in: orgId } });
        console.log("orgId : ", orgId);
        console.log("organisation : ", organisation);

        return res.status(200).send({
            success: true,
            message: "organisation Record Fetched Successfully",
            organisation,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in organisation records",
            error,
        });
    }
};


// GET organisation for hospital REOCRDS
const getOrganisationsForHospitalController = async (req, res) => {
    try {
        const hospital = req.body.userId;
        console.log("hospital : ", hospital);

        const orgId = await inventoryModels.distinct("organisation", { hospitals: hospital });

        console.log("orgId : ", orgId);

        //find org
        const organisations = await userModels.find({
            _id: { $in: orgId },
        });

        console.log("organisations : ", organisations);
        return res.status(200).send({
            success: true,
            message: "Hospital Org Data Fetched Successfully",
            organisations,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Hospital ORG API",
            error,
        });
    }
};

// GET BLOOD RECORD OF 3
const getRecentInventoryController =async(req,res)=>{
    try {
        const inventory = await inventoryModels
        .find({
            organisation : req.body.userId,
        })
        .limit(3)
        .sort({createdAt: -1})
        console.log("inventory : ", inventory);
        

        return res.status(200).send({
            success: true,
            message: "Recent Inventory Data Fetched Successfully",
            inventory,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Get Recent Inventory API",
            error,
        });
    }
}

module.exports = { createInventoryController, getinventoryController, getDonarsController, getHospitalsController, getOrganisationsController, getOrganisationsForHospitalController ,getInventoryHospitalController,getRecentInventoryController};