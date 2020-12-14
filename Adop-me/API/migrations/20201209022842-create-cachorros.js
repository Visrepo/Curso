'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cachorros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.STRING
      },
      porte: {
        type: Sequelize.STRING
      },
      temperamento: {
        type: Sequelize.STRING
      },
      saude: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      adoptado: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cachorros');
  }
};