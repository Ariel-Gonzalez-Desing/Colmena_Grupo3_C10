'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Rols', [
        {
          name : 'user',
          createdAt : new Date,
          updatedAt : new Date
         },
         { 
          name : 'admin',
          createdAt : new Date,
          updatedAt : new Date  
         }         
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Rols', null, {});
     
  }
};
