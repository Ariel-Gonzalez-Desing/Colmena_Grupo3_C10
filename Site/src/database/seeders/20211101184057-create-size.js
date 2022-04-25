'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Sizes', [
        {
          name : '75gr',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : '125gr',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : '200gr',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : '250gr',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : 'Talle Unico',
          createdAt : new Date,
          updatedAt : new Date
         },
         {
          name : 'Unidad',
          createdAt : new Date,
          updatedAt : new Date
         }
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Sizes', null, {});
     
  }
};
