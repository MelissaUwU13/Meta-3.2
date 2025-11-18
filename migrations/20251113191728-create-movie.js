'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
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
      title: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      releaseYear: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true
      },
      genre: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true
      },
      directorId: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull:false,
        unique: true
      },
      language: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      country: {
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
    await queryInterface.dropTable('Movies');
  }
};