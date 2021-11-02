'use strict';

const faker = require('faker');
const products = [];

for (let i = 0; i < 20; i++) {
  
  var product = {
    name : faker.commerce.productName(),
    size : faker.datatype.number({min : 0,max : 30}),
    price : faker.datatype.number({min:100,max:999}),
    categoryId : faker.datatype.number({min:1,max:3}),
    description : faker.commerce.productDescription(),
    createdAt : new Date,
    updatedAt : null,
    deletedAt : null,
  }

  products.push(product)
  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {    
     
    await queryInterface.bulkInsert('Products', products, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Products', null, {});
     
  }
};
