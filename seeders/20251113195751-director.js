'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Directores', [{
      name: "Alfonso Cuarón",
      nationality: "Mexicano",
      birthYear: 1961,
      birthPlace: "Ciudad de México",
      notableAwards: "2 Óscares, 3 Premios BAFTA y Globo de Oro",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Directores', null, {});
  }
};
