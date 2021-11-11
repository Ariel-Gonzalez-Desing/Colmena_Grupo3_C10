'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      rolId: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        allowNull: false,
        references: {
          model:{
            tableName: 'Roles'
=======
        references: {
          model:{
            tableName: 'Rols'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
          },
          key: 'id'
        }
      },
      avatar: {
        type: Sequelize.STRING(100)        
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
    await queryInterface.dropTable('Users');
  }
};