'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Users', [{
     firstName: 'Bruno',
     lastName: 'Doe',
     email: 'bruno@doe.com',
     password: '123456789',
     createdAt: new Date(),
     updatedAt: new Date(),
   },
   {
    firstName: 'Emre',
    lastName: 'Smith',
    email: 'emre@smith.com',
    password: '123456789',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'John',
    lastName: 'Stome',
    email: 'john@stone.com',
    password: '123456789',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
