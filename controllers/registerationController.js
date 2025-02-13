const userModels = require('../models/user.models');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const registerController = async(req,res)=>{
    try {
        //existing user check
        const existingUser = await userModels.findOne({email : req.body.email});
        if(existingUser){
            return res.status(409).send({
                success: false,
                message : "email already exist"
            })
        }
        //hash THE password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;
        //create new user
        const user = new userModels(req.body);
        await user.save();
        res.status(201).send({
            success: true,
            message : "user registered successfully",
            user,
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message : "error occur during registration",
            error : error.message
        })
    }
}

const loginController = async(req,res)=>{
    try {
        const user = await userModels.findOne({email : req.body.email});
        if(!user){
            return res.status(404).send({
                success: false,
                message : "user not found"
            })
        }
        if(user.role !== req.body.role){
            return res.status(403).send({
                success: false,
                message : "user role does not matched",
            })
        }
        //check password
        const comparePassword = await bcrypt.compare(req.body.password , user.password);
        if(!comparePassword){
            return res.status(401).send({
                success: false,
                message : "invalid password"
            })
        }
        //generate token
        const jwtToken = jwt.sign({userId : user._id},process.env.JWT_SECRET,{expiresIn: "30d"});
        return res.status(201).send({
            success: true,
            message : "login successfully",
            token: jwtToken,
            user,
        })

    } catch (error) {
        return res.status(500)
        .send({
            success: false,
            message : "error occur during login",
            error : error.message
        })
    }
}

const getCurrentUser = async(req,res)=>{
    try {
        const user = await userModels.findOne({_id : req.body.userId});
        return res.status(200).send({
            success: true,
            message : "user fetched successfully",
            user,
        })
    } catch (error) {
        return res.status(500)
        .send({
            success: false,
            message : "error occur during getting current user",
            error : error.message
        })
    }
}

module.exports = {
    registerController,
    loginController,
    getCurrentUser
};