const UserRepository = require("../repository/user-repository");

class UserService{
    constructor(){
        this.userrepository = new UserRepository;
    }

    async create(data){
        // console.log(req.body);
        try {
            const user = await this.userrepository.create({
                email : data.email,
                password : data.password, 
            })
            return user;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = UserService;