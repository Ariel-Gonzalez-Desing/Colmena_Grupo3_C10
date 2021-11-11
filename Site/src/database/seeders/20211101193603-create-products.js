'use strict';

// const faker = require('faker');
// const products = [];

// for (let i = 0; i < 20; i++) {  
//   var product = {
//     name : faker.commerce.productName(),
//     size : faker.datatype.number({min : 0,max : 30}),
//     price : faker.datatype.number({min:100,max:999}),
//      : faker.datatype.number({min:1,max:3}),
//     description : faker.commerce.productDescription(),
//     createdAt : new Date,
//     updatedAt : null,
//     deletedAt : null,
//   }
//   products.push(product)  
// }

let products = [
   {
     "name": "Miel chica",
     "size": "75gr",
     "price": 300,   
     "categoryId": 1,     
     "displayId": 1,
     "description": "La miel COLMENA 100% miel de abeja proviene de colmenas Las Flores, Buenos Aires. Es multifloral: de trébol, melilotus y cardo. Un proceso de calentado permite obtener una miel líquida y cristalina, ideal para endulzar infusiones, limonadas y licuados.",
     createdAt: new Date,
  },
  {
     "name": "Miel Mediana",
     "size": "125gr",
     "price": 500,   
     "categoryId": 1,     
     "displayId": 1,
     "description": "Miel COLMENA 100% pura, proviene de flores silvestres que crecen en nuestro monte de la región del Gran Chaco, y así nace este exquisito blend. Algarrobo, Chañar, Sacha melón, Garabato , Poleo, Itin son algunas de flores autóctonas que, gracias al trabajo de las abejas, aportan escalonadamente su sabor, aroma y color para lograr esta miel única. Con un sabor más marcado y dulce que el común de las mieles, tienen una mayor persistencia en el paladar .",
     createdAt: new Date,
  },
  {
     "name": "Miel Grande",
     "size": "200gr",
     "price": 700,   
     "categoryId": 1,     
     "displayId": 2,
     "description": "Miel Colmena, 100% miel de abeja proviene de colmenas Las Flores, Buenos Aires. Es multifloral: de trébol, melilotus y cardo. Un proceso de calentado permite obtener una miel líquida y cristalina, ideal para endulzar infusiones, limonadas y licuados ",
     createdAt: new Date,
  },
  {
     "name": "Panal",
     "size": "250gr",
     "price": 1000,   
     "categoryId": 1,     
     "displayId": 2,
     "description": "Panal Puro de Miel 100% Comestible (Sin contenido de parafina) Presentación: 350grs. Variedad: Melilotus Blend (Flor de Meliloto) Sabor fino con notas a Vainilla y Flores",
     createdAt: new Date,
  },
  {
     "name": "Llavero",
     "size": "unidad",
     "price": 200,   
     "categoryId": 2,     
     "displayId": 2,
     "description": "LLavero de  metal en forma de de 25mm. panal con abeja de Color plateado antiguo, colgante, joyería artesanal, 1 unidad",
     createdAt: new Date,
  },
  {
     "name": "Palito Mielero",
     "size": "unidad",
     "price": 300,   
     "categoryId": 3,     
     "displayId": 2,
     "description": "Palito Mielero realizado en madera natural con ranuras para poder sujetar la miel y que no gotee. Este utensilio permite servir y dosificar la cantidad de miel a emplear en nuestra comida o bebida favorita sin que se vierta.",
     createdAt: new Date,
  },
  {
     "name": "Frasco para Miel",
     "size": "unidad",
     "price": 400,   
     "categoryId": 3,     
     "displayId": 2,
     "description": "Mielera de cristal con tapa, formato ideal para guardar nuestra miel Colmena, incluye tapa y recolector de miel.  MEDIDAS: Alto: 15,5 CM, Circunferencia: 8 CM, Capacidad: 220 ML",
     createdAt: new Date,
  },
  {
     "name": "Remera help-plant-clean",
     "size": "talle unico",
     "price": 450,   
     "categoryId": 4,     
     "displayId":2,
     "description": "La remera ABEJAS, es una prenda en colores universales estampada a mano en el frente con una de nuestras ilustraciones!. El material es 100% algodón  y tiene broches en el escote para que al momento de vestirse sea más fácil! Es una prenda de esas que se heredan de generación en generación y pensada para usar en cualquier momento del año!",
     createdAt: new Date,
  },
  {
     "name": "Remera Save the Bees",
     "size": "todos los talles",
     "price": 450,   
     "categoryId": 4,     
     "displayId": 1,
     "description": "La remera ABEJAS, es una prenda en colores universales estampada a mano en el frente con una de nuestras ilustraciones!. El material es 100% algodón  y tiene broches en el escote para que al momento de vestirse sea más fácil! Es una prenda de esas que se heredan de generación en generación y pensada para usar en cualquier momento del año!",
     createdAt: new Date,
  }
 ]

module.exports = {
  up: async (queryInterface, Sequelize) => {    
     
    await queryInterface.bulkInsert('Products', products, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Products', null, {});
     
  }
};
