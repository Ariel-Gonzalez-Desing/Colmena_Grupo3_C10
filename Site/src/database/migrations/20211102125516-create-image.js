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
=======
        allowNull: false,
>>>>>>> 46011eb4fd71fff2f319295141576e1b4469c9df
        references: {
          model: {
            tableName: 'Products'
          },
          key: 'id'
<<<<<<< HEAD
        }
=======
        },
        onDelete : 'cascade'
>>>>>>> 46011eb4fd71fff2f319295141576e1b4469c9df
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