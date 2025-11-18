'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Directores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.STRING,
        allowNull:false,
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
        unique: true
      },
      birthYear: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true
      },
      birthPlace: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      notableAwards: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
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
    await queryInterface.dropTable('Directores');
  }
};