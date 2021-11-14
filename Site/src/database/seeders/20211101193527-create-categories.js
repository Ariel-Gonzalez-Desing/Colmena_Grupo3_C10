'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {    
      
      await queryInterface.bulkInsert('Categories', [
        {
          name : 'Comestible',
          createdAt : new Date,
          updatedAt : new Date
         },
         { 
          name : 'Deco',
          createdAt : new Date,
          updatedAt : new Date  
         },
         { 
          name : 'Bazar',
          createdAt : new Date,
          updatedAt : new Date  
         },
         { 
          name : 'Vestimenta',
          createdAt : new Date,
          updatedAt : new Date  
         }     
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
