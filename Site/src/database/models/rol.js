'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Rol.hasMany(models.User,{
<<<<<<< HEAD
        as : 'users'
=======
        as : 'users',
        foreignKey : 'rolId'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
      })
    }
  };
  Rol.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};