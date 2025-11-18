'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actores', [{
        id: "act_mx_001",
        name: "Gael García Bernal",
        nationality: "Mexicano",
        birthYear: 1978,
        birthPlace: "Guadalajara, Jalisco",
        notableAwards: ["Premio del Festival de Cannes", "2 Premios BAFTA"]
      },
      {
        id: "act_mx_002",
        name: "Diego Luna",
        nationality: "Mexicano",
        birthYear: 1979,
        birthPlace: "Toluca, Estado de México",
        notableAwards: ["Premio Marcello Mastroianni", "Diosa de Plata"]
  }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
