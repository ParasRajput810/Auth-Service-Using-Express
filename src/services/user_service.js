const UserRepository = require("../repository/user-repository");
var jwt = require('jsonwebtoken');
const {JWT_Key} = require("../config/serverConfig");
const bcrypt = require("bcrypt");

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

    async verifytoken(user){
        try {
            const user_check = await jwt.verify(user , JWT_Key);
            return user_check;
        } catch (error) {
            throw {error};
        }
    }

    async checkpassword(plainpassword , encryptedpassword){
        try {
            return bcrypt.compareSync(plainpassword, encryptedpassword);
        } catch (error) {
            throw {error};
        }
    }

    async signin(user_email , user_password){
        try {
            const user = await this.userrepository.getbyemail(user_email);
            const password = await this.checkpassword(user_password , user.password);
            if(!password){
                throw {error : "Incorrect Password"};
            }
            const user_token = await this.createtoken({email:user.email , id : user.id});
            return user_token;
        } catch (error) {
            throw {error};
        }
    }

    async isAuthenticated(header){
        try {
            const valid_token = await this.verifytoken(header);
            if(!valid_token){
                throw {error : "Inavlid token"};
            }
            const userid = await this.userrepository.getbyid(valid_token.id);
            if(!userid){
                throw {error : "Something went wrong"};
            }
            return userid;
        } catch (error) {
            throw {error};
        }
    }

    async setRole(userEmail , roleName){
        try {
            const roleassign = await this.userrepository.setRole(userEmail,roleName);
            return roleassign;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = UserService;