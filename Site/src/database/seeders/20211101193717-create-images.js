'use strict';

const imagenes = ['img-miel-01.png','img-miel-02.png','img-miel-03.png','img-miel-04.png','img-miel-05.png','img-miel-06.png','img-miel-07.png','img-miel-08.png','img-miel-09.png','img-miel-10.png','img-miel-11.png','img-miel-12.png'];

const images = [];

for (let i = 0; i < 20; i++) {
  for (let index = 0; index < 3; index++) {
    var image = {
      file : imagenes[Math.floor(Math.random() * (5 - 0)) + 0],
      productId : i + 1,
      createdAt : new Date,
      updatedAt : new Date
    }
    images.push(image)    
  }  
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Images', images, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};
