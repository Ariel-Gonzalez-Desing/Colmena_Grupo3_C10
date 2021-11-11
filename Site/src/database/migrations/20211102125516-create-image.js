'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
<<<<<<< HEAD
        allowNull: false,
=======
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
        references: {
          model: {
            tableName: 'Products'
          },
          key: 'id'
<<<<<<< HEAD
        },
        onDelete : 'cascade'
=======
        }
>>>>>>> ea8c61df458ceff1e8132c0f5450430e3b813663
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
    await queryInterface.dropTable('Images');
  }
};