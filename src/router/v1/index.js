const express = require('express');
const router = express.Router();
const usercontroller = require("../../controller/user-controller");

router.post("/signup" , usercontroller.create);


module.exports = router;