'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      models.user.hasMany(models.item, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  };
  user.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
    version: true,
  });
  return user;
};