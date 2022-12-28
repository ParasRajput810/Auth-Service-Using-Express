const express = require('express');
const router = express.Router();
const usercontroller = require("../../controller/user-controller");
const {user_validation} = require("../../middleware/valid_user");

router.post("/signup" , 
user_validation,
usercontroller.create);
router.post("/signin", 
user_validation,
usercontroller.signin);

module.exports = router;