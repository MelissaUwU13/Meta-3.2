'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Actores', [{
        name: "Gael García Bernal",
        nationality: "Mexicano",
        birthYear: 1978,
        birthPlace: "Guadalajara, Jalisco",
        notableAwards: "Premio del Festival de Cannes y 2 Premios BAFTA",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Diego Luna",
        nationality: "Mexicano",
        birthYear: 1979,
        birthPlace: "Toluca, Estado de México",
        notableAwards: "Premio Marcello Mastroianni y Diosa de Plata",
        createdAt: new Date(),
        updatedAt: new Date()
  }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Actores', null, {});
  }
};
