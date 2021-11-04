'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
      
      await queryInterface.bulkInsert('Categories', [
        {
          name : 'comestible',
          createdAt : new Date,
          updatedAt : new Date
         },
         { 
          name : 'deco',
          createdAt : new Date,
          updatedAt : new Date  
         },
         { 
          name : 'bazar',
          createdAt : new Date,
          updatedAt : new Date  
         },
         { 
          name : 'vestimenta',
          createdAt : new Date,
          updatedAt : new Date  
         }     
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
