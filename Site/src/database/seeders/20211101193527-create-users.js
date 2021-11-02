'use strict';

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
//     createdAt : new Date,
//     updatedAt : null,
//     deletedAt : null,
//   }

//   users.push(user)
  
// }

let users = [
  {
     firstName: "Allianora",
     lastName: "Buckle",
     email: "abuckle0@fastcompany.com",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "default.jpg",
     rolId: "user???????????????????" 
  },
  {
     firstName: "Kirsten",
     lastName: "Rudgley",
     email: "krudgley1@loc.gov",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "default.jpg",
     rol: "user"
  },
  {
     firstName: "Cindra",
     lastName: "Ghilardi",
     email: "cghilardi2@cnet.com",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "default.jpg",
     rol: "user"
  },
  {
     firstName: "Delmer",
     lastName: "Lewson",
     email: "dlewson3@msn.com",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "default.jpg",
     rol: "user"
  },
  {
     firstName: "Jase",
     lastName: "Killby",
     email: "jkillby4@theguardian.com",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "default.jpg",
     rol: "user"
  },
  {
     firstName: "dani",
     lastName: "Rodriguez",
     email: "danirodriguez@yahoo.com.ar",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "img1.png",
     rol: "admin"
  },
  {
     firstName: "fernanda",
     lastName: "elola",
     email: "elolafernanda@yahoo.com.ar",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "img4.png",
     rol: "user"
  },
  {
     firstName: "ariel",
     lastName: "gonzalez",
     email: "arielgonzalez@yahoo.com.ar",
     password: "$2a$05$DCatfrj7ZIxnnsFY08sXp.2lMh04FeO7W.nkgiRF6mH.PgUjTHD3G",
     avatar: "img3.png",
     rol: "user"
  },
  {
     firstName: "joel",
     lastName: "jurado",
     email: "joeljurado@yahoo.com.ar",
     password: "$2a$05$tp5YjK6jENypSvbBTKnGQu9OtYtrQPYBTTfShjmdh2NuXCWfKDN8W",
     avatar: "img2.png",
     rol: "admin"
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
