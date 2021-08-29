'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      //User.hasMany(models.Key)
    }
  };
  User.init({
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  })
  return User;
};