const UserService = require("../services/user_service");

const userservice = new UserService();

const create = async(req,res) =>{
    console.log(req.body);
    try {
        const user = await userservice.create(req.body);
        return res.status(201).json({
            Success : true,
            message : "User Created Succesfully",
            data : user,
            err :{}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            Success : false,
            message : error.message,
            data : {},
            err : error.explanation
        })
    }
}

const signin = async(req,res)=>{
    try {
        const token = await userservice.signin(req.body.email, req.body.password);
        return res.status(201).json({
            Success : true,
            message : "User Created Succesfully",
            data : token,
            err :{}
        })
    } catch (error) {
        return res.status(501).json({
            Success : false,
            message : "User Creation failed",
            data : {},
            err : error
        })
    }
}

const isAuthenticated = async(req,res)=>{
    try {
        const user = await userservice.isAuthenticated(req.headers["x-access-token"]);
        return res.status(201).json({
            Success:false,
            message:"User validation confirmed",
            data : user,
            err  :{}
        })
    } catch (error) {
        return res.status(501).json({
            Success : false,
            message : "User Creation failed",
            data : {},
            err : error
        })
    }

}

const setRole = async(req , res)=>{
    try {
        const roleassign = await userservice.setRole(req.query,req.body);
        return res.status(201).json({
            Success:true,
            message:"Updated user role succesfully",
            data : roleassign,
            err  :{}
        })
    } catch (error) {
        return res.status(501).json({
            Success : false,
            message : "User Creation failed",
            data : {},
            err : error
        })
    }
}

module.exports = {
    create,
    signin,
    isAuthenticated,
    setRole,

}