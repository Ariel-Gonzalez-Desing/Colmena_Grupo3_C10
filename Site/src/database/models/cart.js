'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.User,{
        as : 'user',
        foreignKey : 'userId'
<<<<<<< HEAD
=======
      }),
      Cart.belongsToMany(models.Product,{
        as : 'product',
        foreignKey : 'productId'
      }),
      Cart.hasMany(models.Order,{
        as : 'order',
        foreignKey : 'orderId'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
      })
    }
  };
  Cart.init({
    userId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};