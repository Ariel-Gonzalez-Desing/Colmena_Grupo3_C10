'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<< HEAD
     static associate(models) {
      // define association here
      User.belongsTo(models.Rol,{
        as : 'rol'  
      }),
      User.hasMany(models.Order,{
        as : 'orders'
=======
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol,{
        as : 'rol',
        foreignKey: 'userId'
      }),
      User.hasMany(models.Order,{
        as : 'orders',
        foreignKey: 'userId'
      }),
      User.hasMany(models.Cart,{
        as : 'cart',
        key : 'userId'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};