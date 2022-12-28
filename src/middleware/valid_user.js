const user_validation = async(req,res,next)=>{
        if(!req.body.email || !req.body.password){
            return res.status(400).json({
                success : false,
                data : {},
                message : "Something went wrong",
                err : "Empty email or password",
            })
        }
        next();
}

module.exports = {user_validation};