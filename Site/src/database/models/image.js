'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
=======
      Image.belongsTo(models.Product,{
        as : 'image',
        key : 'productId'
      })
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
    }
  };
  Image.init({
    file: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};