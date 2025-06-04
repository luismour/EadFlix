'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      { name: 'Desenvolvimento Mobile Avançado', position: 6, created_at: new Date(), updated_at: new Date() },
      { name: 'DevOps e Infraestrutura Ágil', position: 7, created_at: new Date(), updated_at: new Date() },
      { name: 'Ciência de Dados e Inteligência Artificial', position: 8, created_at: new Date(), updated_at: new Date() },
      { name: 'Marketing Digital para Desenvolvedores', position: 9, created_at: new Date(), updated_at: new Date() },
      { name: 'Games com Unity e C#', position: 10, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', { name: [
      'Desenvolvimento Mobile Avançado',
      'DevOps e Infraestrutura Ágil',
      'Ciência de Dados e Inteligência Artificial',
      'Marketing Digital para Desenvolvedores',
      'Games com Unity e C#']
    }, {});
  }
};