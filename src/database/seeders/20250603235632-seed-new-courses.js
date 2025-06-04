'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query('SELECT id, name FROM categories ORDER BY position ASC;');

    const categoryMap = {};
    categories.forEach(category => {
      categoryMap[category.name] = category.id;
    });

    const mobileCategoryId = categoryMap['Desenvolvimento Mobile Avançado'];
    const devopsCategoryId = categoryMap['DevOps e Infraestrutura Ágil'];
    const dataScienceCategoryId = categoryMap['Ciência de Dados e Inteligência Artificial'];
    const marketingCategoryId = categoryMap['Marketing Digital para Desenvolvedores'];
    const gamesCategoryId = categoryMap['Games com Unity e C#'];
    const frontendCategoryId = categoryMap['Tecnologias Front-end'];

    if (!mobileCategoryId || !devopsCategoryId || !dataScienceCategoryId || !marketingCategoryId || !gamesCategoryId || !frontendCategoryId) {
      console.error("Uma ou mais categorias não foram encontradas. Certifique-se de que o seeder de categorias foi executado e os nomes correspondem.");
      throw new Error("Categorias não encontradas para o seeder de cursos.");
    }

    await queryInterface.bulkInsert('courses', [
      { name: 'Flutter: Interfaces Nativas e Performance', synopsis: 'Aprenda a criar aplicativos mobile incríveis com Flutter e Dart.', featured: true, category_id: mobileCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'React Native: Do Zero ao Deploy', synopsis: 'Desenvolva apps nativos para iOS e Android com JavaScript e React.', featured: false, category_id: mobileCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'Docker e Kubernetes: Orquestração de Contêineres', synopsis: 'Domine a criação e gerenciamento de contêineres com Docker e Kubernetes.', featured: true, category_id: devopsCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'CI/CD com GitLab: Automação de Deploy', synopsis: 'Implemente pipelines de integração e entrega contínua com GitLab CI.', featured: true, category_id: devopsCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'Machine Learning com Python e Scikit-learn', synopsis: 'Introdução prática a algoritmos de Machine Learning.', featured: true, category_id: dataScienceCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'Deep Learning com TensorFlow e Keras', synopsis: 'Crie redes neurais profundas para projetos de IA.', featured: false, category_id: dataScienceCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'SQL para Análise de Dados', synopsis: 'Domine SQL para extrair insights valiosos de bancos de dados.', featured: true, category_id: dataScienceCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'SEO para Devs: Posicione seus Projetos no Google', synopsis: 'Aprenda técnicas de SEO para aumentar a visibilidade dos seus sites e apps.', featured: false, category_id: marketingCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'Growth Hacking para Produtos Digitais', synopsis: 'Estratégias de crescimento rápido para startups e produtos de tecnologia.', featured: true, category_id: marketingCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'Desenvolvimento de Jogos 2D com Unity', synopsis: 'Crie seu primeiro jogo 2D utilizando a engine Unity e a linguagem C#.', featured: true, category_id: gamesCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'Modelagem 3D para Games com Blender', synopsis: 'Aprenda a modelar personagens e cenários 3D para seus jogos no Blender.', featured: false, category_id: gamesCategoryId, created_at: new Date(), updated_at: new Date() },
      { name: 'Next.js: Framework React Full-stack', synopsis: 'Desenvolva aplicações React modernas com renderização no servidor e estática usando Next.js.', featured: true, category_id: frontendCategoryId, created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', { name: [
      'Flutter: Interfaces Nativas e Performance',
      'React Native: Do Zero ao Deploy',
      'Docker e Kubernetes: Orquestração de Contêineres',
      'CI/CD com GitLab: Automação de Deploy',
      'Machine Learning com Python e Scikit-learn',
      'Deep Learning com TensorFlow e Keras',
      'SQL para Análise de Dados',
      'SEO para Devs: Posicione seus Projetos no Google',
      'Growth Hacking para Produtos Digitais',
      'Desenvolvimento de Jogos 2D com Unity',
      'Modelagem 3D para Games com Blender',
      'Next.js: Framework React Full-stack'
    ] }, {});
  }
};