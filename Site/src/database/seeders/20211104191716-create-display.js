'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Display', [
        {
          name : 'destacado',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : 'noDestacado',
          createdAt : new Date,
          updatedAt : new Date
         }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Display', null, {});
     
  }
};
