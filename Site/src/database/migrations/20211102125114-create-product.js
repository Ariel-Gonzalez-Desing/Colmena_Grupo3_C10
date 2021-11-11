'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
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
      description: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(8,2),
        allowNull: false,
      },
      size:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "Categories"
          },
<<<<<<< HEAD
          key : 'id',
          update : 'cascade'
=======
          key : 'id'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
        }
      },
      displayId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "Displays"
          },
<<<<<<< HEAD
          key : 'id',
          update : 'cascade'
=======
          key : 'id'
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
        }
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
    await queryInterface.dropTable('Products');
  }
};