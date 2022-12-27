const express = require('express');
const bodyparser = require('body-parser');
const {PORT,SALT} = require("./config/serverConfig");
const apiroutes = require("./router/index");
// const bcrypt = require("bcrypt");
// const {User_Creds} = require("./models/index");


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
    })
}

setting_server();