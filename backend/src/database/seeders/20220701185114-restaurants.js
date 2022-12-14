'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('restaurants',
    [
      {
        name: 'Sabor Brasileiro',
        subname: 'Comida Brasileira',
        image:'https://img.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_23-2148739179.jpg',
        phone: '01131540000',
        address: 'Rua das Hortências, 55, São Paulo, SP',
        rating: 4.7,
      },
      {
        name: 'Bella Italia',
        subname: 'Comida Italiana',
        image: 'https://img.freepik.com/free-vector/restaurant-mural-wallpaper_52683-49099.jpg',
        phone: '01131550001',
        address: 'Rua das Bromélias, 99, São Paulo, SP',
        rating: 4.8,
      },
      {
        name: 'Be vegan',
        subname: 'Comida Vegana',
        image: 'https://img.freepik.com/free-photo/top-view-healthy-food-immunity-boosting-composition_23-2148890265.jpg',
        phone: '01131550001',
        address: 'Rua da Paz, 101, São Paulo, SP',
        rating: 4.8,
      },
      {
        name: 'Sushi Lovers',
        subname: 'Comida Japonesa',
        image: 'https://img.freepik.com/free-photo/sushi-set-with-tuna-salmon-vegetables-ginger-wasabi-side-view_141793-15530.jpg',
        phone: '01131660001',
        address: 'Rua dos passáros, 1, São Paulo, SP',
        rating: 4.6, 
      },
      {
        name: 'Boteco do Judas',
        subname: 'Comida de Boteco',
        image: 'https://img.freepik.com/free-photo/variety-snacks-nuts-with-beer-cups_114579-4432.jpg',
        phone: '01132666660',
        address: 'Rua das Causas Perdidas, 171, São Paulo, SP',
        rating: 4.6,
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('restaurants', null, {}),
};