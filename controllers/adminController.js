const userModels = require("../models/user.models");

const getDonarListController =async(req,res)=>{
    try {
        const donarData = await userModels
        .find({role :"donar"})
        .sort({createdAt :-1})

        return res.status(200).send({
            success: true,
            TotalLength : donarData.length,
            message: "Donar List Fetched Successfully",
            donarData,
        })
    } catch (error) {
        console.log("error : ",error);
        return res.status(500).send({
            success: false,
            message: "Error in fetching Donar List",
            error,
        });
    }
}


const getHospitalListController =async(req,res)=>{
    try {
        const hospitalData = await userModels
        .find({role :"hospital"})
        .sort({createdAt :-1})

        return res.status(200).send({
            success: true,
            TotalLength : hospitalData.length,
            message: "Hospital List Fetched Successfully",
            hospitalData,
        })
    } catch (error) {
        console.log("error : ",error);
        return res.status(500).send({
            success: false,
            message: "Error in fetching Donar List",
            error,
        });
    }
}


const getOrganisationListController =async(req,res)=>{
    try {
        const organisationData = await userModels
        .find({role :"organisation"})
        .sort({createdAt :-1})

        return res.status(200).send({
            success: true,
            TotalLength : organisationData.length,
            message: "Organisation List Fetched Successfully",
            organisationData,
        })
    } catch (error) {
        console.log("error : ",error);
        return res.status(500).send({
            success: false,
            message: "Error in fetching Donar List",
            error,
        });
    }
};

const deleteUserController = async(req ,res)=>{
    try {
        await userModels.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in Deleting User",
            error,
        });
    }
}


module.exports = {getDonarListController,getHospitalListController,getOrganisationListController,deleteUserController};