'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      title: "Y tu mamá también",
      releaseYear: 2001,
      genre: "Drama, Road Movie, Coming of Age",
      duration: 105,
      directorId:1,
      rating: 7.7,
      language: "Español",
      country: "México",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
