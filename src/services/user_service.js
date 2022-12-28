const UserRepository = require("../repository/user-repository");
var jwt = require('jsonwebtoken');
const {JWT_Key} = require("../config/serverConfig");

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

    async createtoken(user){
        try {
            const user_token = await jwt.sign(user , JWT_Key , {expiresIn : '1h'} );
            return user_token;
        } catch (error) {
            throw {error};
        }
    }

    async verifytoken(user , algo){
        try {
            const user_check = await jwt.verify(user , algo);
            return user_check;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = UserService;