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
   return queryInterface.bulkInsert('Items', [
     {
       title: 'Moped',
       link: 'https://detroitmopedworks.com',
       userId: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      title: 'iPad Mini',
      link: 'https://www.apple.com/ipad-mini',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Electric Scooter',
      link: 'https://swagtron.com/electric-scooter',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Monitor',
      link: 'https://www.asus.com/us/Monitors/MB16B',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Items', null, {});
  }
};
