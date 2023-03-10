const dotenv = require("dotenv");
dotenv.config();
const bcrypt = require("bcrypt");

module.exports = {
    PORT : process.env.PORT,
    SALT : bcrypt.genSaltSync(10),
    JWT_Key : process.env.JWT_Key,
    DB_sync : process.env.DB_sync
}