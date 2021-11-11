'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.createTable('Roles', {
=======
    await queryInterface.createTable('Rols', {
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
<<<<<<< HEAD
    await queryInterface.dropTable('Roles');
=======
    await queryInterface.dropTable('Rols');
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
  }
};