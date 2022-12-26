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
}

module.exports = UserRepository;