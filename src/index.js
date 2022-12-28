const express = require('express');
const bodyparser = require('body-parser');
const {PORT,SALT, JWT_Key} = require("./config/serverConfig");
const apiroutes = require("./router/index");
// const bcrypt = require("bcrypt");
// const {User_Creds} = require("./models/index");
const userrepo = require("./repository/user-repository");
const userservice = require("./services/user_service");

const setting_server = async() =>{
    const app = express();
   
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api', apiroutes);
    app.listen(PORT , async ()=>{
        console.log("Server Started...");
        // const encpassword = await User_Creds.findByPk(4);
        // const value = bcrypt.compareSync("hnkkmkl" , encpassword.password);
        // console.log(value);
        // const userrepository = new userrepo();
        // const user = await userrepository.getbyid(3);
        // const user_ser = new userservice();
        // const user_token = await user_ser.createtoken({email:"r123@gmail.com" , id : "4"});
        // console.log(user_token);

        // const tokencheck = await user_ser.verifytoken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InIxMjNAZ21haWwuY29tIiwiaWQiOiI0IiwiaWF0IjoxNjcyMjAyODczLCJleHAiOjE2NzIyMDY0NzN9.X0e8EdZKZ274oxgUr94QpAXtpLjW6Ddn6yzgDzqzans" , JWT_Key);

        // console.log(tokencheck);
    })
}

setting_server();