'use strict';
const {
  Model
} = require('sequelize');

const {SALT} = require("../config/serverConfig");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User_Creds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role , {through : 'User_Roles'});
    }
  }
  User_Creds.init({
    email: {
      type : DataTypes.STRING,
      allowNull:false,
        unique:true,
        validate :{
          isEmail : true
        }
    },
    password: {
      type : DataTypes.STRING,
        allowNull : false,
        validate : {
          len : [3,10]
        }
    }
  }, {
    sequelize,
    modelName: 'User_Creds',
  });

  User_Creds.beforeCreate((user)=>{
    const encryptedPassword = bcrypt.hashSync(user.password , SALT);
    user.password = encryptedPassword;
    console.log(user.password);
  })
  return User_Creds;
};