'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Creds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
  return User_Creds;
};