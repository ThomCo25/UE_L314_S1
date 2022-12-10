'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false, 
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
      },
      firstname: {
        allowNull: false, 
        type: Sequelize.STRING
      },
      lastname: {
        allowNull: false, 
        type: Sequelize.STRING
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
