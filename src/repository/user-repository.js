const {User_Creds , Role}= require("../models/index");

class UserRepository{
    
    async create(data){
        try {
            const user = await User_Creds.create(data);
            return user;
        } catch (error) {
            throw {error};
        }
    }
    async delete(userid){
        try {
            await User_Creds.destroy({where:{
                id:userid
            }})
        } catch (error) {
            throw {error};
        }
    }

    async getbyid(userid){
        try {
            const user = await User_Creds.findByPk(userid, {
                attributes : ["id" , "email"],
            })
            return user ;
        } catch (error) {
            throw {error};
        }
    }

    async getbyemail(useremail){
        try {
            const user = await User_Creds.findOne({where : {
                email:useremail,
            }})
            return user;
        } catch (error) {
            throw {error};
        }
    }

    async setRole(userEmail , roleName){
    
        try {
        const user = await User_Creds.findOne({
            where:{
                email : userEmail.userEmail
            }
        })
        const UserRole = await Role.findOne({
            where:{
                name : roleName.roleName
            }
        })
        user.addRole(UserRole);
        return true   
        } 
        catch (error) {
            console.log(error);
            throw {error};    
        }
    }
}

module.exports = UserRepository;