const userModels = require("../models/user.models");

module.exports = async(req,res,next)=>{
    try {
        const user = await userModels.findOne(req.body.userId); 
        if(user?.role !== "admin"){
            return res.status(403).send({
                success: false,
                message: "You are not authorized to perform this action",
            });
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in adminMiddleware",
            error,
        });
    }
}