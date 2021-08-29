'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Key extends Model {
    static associate(models) {
      //Key.belongsTo(models.User)
    }
  };
  Key.init({
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    userUuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    opaque: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize, // We need to pass the connection instance
    modelName: 'Key' // We need to choose the model name
  })
  return Key;
};