'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      },
      genre: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      directorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Directores",   // nombre de la tabla real
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "RESTRICT"
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      language: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      country: {
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
    await queryInterface.dropTable('Movies');
  }
};