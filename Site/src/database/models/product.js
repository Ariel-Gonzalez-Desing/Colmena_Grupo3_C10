'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<< HEAD
     static associate(models) {
=======
    static associate(models) {
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
      // define association here
      Product.hasMany(models.Image,{
        as: 'images',
        onDelete: 'cascade',
<<<<<<< HEAD
        foreignKey: 'productId'
      }),
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'categoryId'
      }),
      Product.belongsTo(models.Display,{
        as : 'display',
        foreignKey : 'displayId'
=======
        key: 'productId'
      }),
      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey : 'productId'
      }),
      Product.belongsToMany(models.Cart,{
        as : 'cart',
        key : 'productId'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
      })
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
<<<<<<< HEAD
    size: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    displayId: DataTypes.INTEGER
=======
    categoryId: DataTypes.INTEGER
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};