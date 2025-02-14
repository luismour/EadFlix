'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('courses', 'category_id', {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
      references: { model: 'categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE' 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('courses', 'category_id', {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
      references: { model: 'categories', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT' 
    });
  }
};
