'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('episodes', 'upload_video', {
      type: Sequelize.DataTypes.STRING,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('episodes', 'upload_video');
  }
};
