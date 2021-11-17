'use strict';

// const imagenes = ['img-miel-01.png','img-miel-02.png','img-miel-03.png','img-miel-04.png','img-miel-05.png','img-miel-06.png','img-miel-07.png','img-miel-08.png','img-miel-09.png','img-miel-10.png','img-miel-11.png','img-miel-12.png'];

// const images = [];

// for (let i = 0; i < 20; i++) {
//   for (let index = 0; index < 3; index++) {
//     var image = {
//       file : imagenes[Math.floor(Math.random() * (5 - 0)) + 0],
//       productId : i + 1,
//       createdAt : new Date,
//       updatedAt : new Date
//     }
//     images.push(image)    
//   }  
// }
let products = [
  {
     "id": 1,
     "image": ["frasco75gr.jpg"]
  },
  {
     "id": 2,
     "image": ["frasco125grCar.png"]
  },
  {
     "id": 3,
     "image": ["frasco200gr.jpg"]
  },
  {
     "id": 4,
     "image": ["Panal.png"]
  },
  {
     "id": 5,
     "image": ["llavero 9.png"]
  },
  {
     "id": 6,
     "image": ["palito mielero.png"]
  },
  {
     "id": 7,
     "image": ["producto3.jpg"]
  },
  {
     "id": 8,
     "image": ["remera-help.jpg"]
  },
  {
     "id": 9,
     "image": ["remeras1.jpg"]
  }
]

let images = products.map(product => {
  let image = {
    productId : product.id,
    file : product.image,
    createdAt : new Date
  }
  return image
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Images', images, {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Images', null, {});
     
  }
};
