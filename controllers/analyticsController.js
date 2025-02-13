const mongoose = require("mongoose");
const inventoryModels = require("../models/inventory.models");

//GET BLOOD DATA
const bloodGroupDetailsContoller=async(req ,res)=>{
    try {
        const bloodGroups = ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"];
        const bloodGroupData = [];
        const organisation = new mongoose.Types.ObjectId(req.body.userId);
        console.log("Organisation : ",organisation);
        
        //get single blood group
        await Promise.all(
            bloodGroups.map(async (bloodGroup) =>{
                //Count TOTAL IN
                const totalIn = await inventoryModels.aggregate([
                    { $match: { organisation, bloodGroup, inventoryType: "in" } },
                    { $group: { _id: null, total: { $sum: "$quantity" } } },
                ])
                //Count TOTAL OUT
                const totalOut = await inventoryModels.aggregate([
                    { $match: { organisation, bloodGroup, inventoryType: "out" } },
                    { $group: { _id: null, total: { $sum: "$quantity" } } },
                ])

                //available blood 
                const availableBlood = (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0);

                //PUSH DATA
                bloodGroupData.push({
                    bloodGroup,
                    availableBlood,
                    totalIn: totalIn[0]?.total || 0,
                    totalOut: totalOut[0]?.total || 0,
                });
            })
        )
        return res.status(200).send({
            success: true,
            message: "Blood Group Details Fetched Successfully",
            bloodGroupData,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Blood Group Details",
            error,
        });
        
    }
}

module.exports = { bloodGroupDetailsContoller };