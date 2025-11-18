'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Actores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      birthYear: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true
      },
      birthPlace: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      notableAwards: {
        type: Sequelize.STRING,
        allowNull:false,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Actores');
  }
};