'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movieActors', [{
      movieId: 1, 
      actorId: 1, 
      characterName: "Julio Zapata",
      createdAt: new Date(),
      updatedAt: new Date()
    },{ 
      movieId: 1, 
      actorId: 2, 
      characterName: "Tenoch Iturbide",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movieActors', null, {});
  }
};
