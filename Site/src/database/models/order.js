'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User,{
<<<<<<< HEAD
        as : 'order'
      }),
      Order.hasMany(models.Cart,{
        as : 'carts'
=======
        as : 'user',
        foreignKey : 'orderId'
      }),
      Order.hasMany(models.Cart,{
        as : 'carts',
        foreignKey : 'orderId'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
      })
    }
  };
  Order.init({
    status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};