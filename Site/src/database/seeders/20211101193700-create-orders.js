'use strict';

const faker = require('faker');
const orders = [];

for (let i = 0; i < 20; i++) {
  
  var order = {
    status : faker.datatype.boolean(),
    userId : faker.datatype.number({min:1,max:3}),
    createdAt : new Date,
    updatedAt : null,
  }

  orders.push(order)
  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Orders', orders, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      Example:
      await queryInterface.bulkDelete('Orders', null, {});
     
  }
};
