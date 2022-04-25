'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Displays', [
        {
          name : 'destacado',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : 'oferta',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : 'sinDisplay',
          createdAt : new Date,
          updatedAt : new Date
         }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Displays', null, {});
     
  }
};
