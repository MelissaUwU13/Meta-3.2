'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MovieActors', {
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
      movieId: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      actorId: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      characterName: {
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
    await queryInterface.dropTable('MovieActors');
  }
};