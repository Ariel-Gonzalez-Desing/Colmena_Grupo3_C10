'use strict';
const bcrypt = require('bcryptjs'); 

// const faker = require('faker');
// const users = [];

// for (let i = 0; i < 20; i++) {
  
//   var user = {
//     first_name : faker.name.firstName(),
//     last_name : faker.name.lastName(),
//     email : faker.internet.email({min:100,max:999}),
//     password : faker.internet.password(),
//     rolId : faker.datatype.number({min:1,max:3}),
//     avatar: faker.image.avatar({min:1,max:3}),
//    createdAt: new Date,
//    updatedAt: null,
//     deletedAt : null,
//   }

//   users.push(user)
  
// }

let users = [  
  {
     "firstName": "dani",
     "lastName": "Rodriguez",
     "email": "danirodriguez@yahoo.com.ar",
     "password" : bcrypt.hashSync('123123',10),
     "avatar": "img1.png",
     "rolId": 2,
     createdAt : new Date,
     updatedAt : new Date
  },
  {
     "firstName": "fernanda",
     "lastName": "elola",
     "email": "elolafernanda@yahoo.com.ar",
     "password" : bcrypt.hashSync('123123',10),
     "avatar": "img4.png",
     "rolId": 1,
     createdAt : new Date,
     updatedAt : new Date
  },
  {
     "firstName": "ariel",
     "lastName": "gonzalez",
     "email": "arielgonzalez@yahoo.com.ar",
     "password" : bcrypt.hashSync('123123',10),
     "avatar": "img3.png",
     "rolId": 1,
     createdAt : new Date,
     updatedAt : new Date
  },
  {
     "firstName": "joel",
     "lastName": "jurado",
     "email": "joeljurado@yahoo.com.ar",
     "password" : bcrypt.hashSync('123123',10),
     "avatar": "img2.png",
     "rolId": 2,
     createdAt : new Date,
     updatedAt : new Date
  },
  {
     "firstName": "admin",
     "lastName": "colmena",
     "email": "admin@colmena.com.ar",
     "password" : bcrypt.hashSync('123123',10),
     "avatar": "img1.png",
     "rolId": 2,
     createdAt : new Date,
     updatedAt : new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Users', users, {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
