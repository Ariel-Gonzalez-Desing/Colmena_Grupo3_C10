'use strict';

const faker = require('faker');
const carts = [];

for (let i = 0; i < 20; i++) {
  
  var cart = {
    userId : faker.datatype.number({min:1,max:3}),
    orderId : faker.datatype.number({min:1,max:3}),
    productId : faker.datatype.number({min:1,max:3}),
    quantity : faker.datatype.number({min:1,max:100}),
    createdAt : new Date,
    updatedAt : null,
  }

  carts.push(cart)
  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Carts', carts, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Carts', null, {});
     
  }
};
