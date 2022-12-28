const {User_Creds}= require("../models/index");

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
}

module.exports = UserRepository;