const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require("./config/serverConfig");
const apiroutes = require("./router/index");


const setting_server = async() =>{
    const app = express();
   
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api', apiroutes);
    app.listen(PORT , ()=>{
        console.log("Server Started...");
    })
}

setting_server();