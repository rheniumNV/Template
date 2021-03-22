'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    static associate(models) {
      models.item.belongsTo(models.user, {
        foreignKey: "user_id",
        sourceKey: "id",
      });
    }
  };
  item.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'item',
    underscored: true,
    version: true,
  });
  return item;
};