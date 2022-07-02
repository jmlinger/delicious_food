'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('restaurants',
    [
      {
        name: 'Sabor Brasileiro',
        image:'https://www.freepik.com/free-photo/flat-lay-assortment-with-delicious-brazilian-food_10892486.htm#query=food&position=17&from_view=search',
        phone: '01131540000',
        address: 'Rua das Hortências, 55, São Paulo, SP',
        rating: 4.7,
      },
      {
        name: 'Bella Italia',
        image: 'https://www.freepik.com/free-vector/restaurant-mural-wallpaper_10756745.htm#query=italian%20food&position=4&from_view=search',
        phone: '01131550001',
        address: 'Rua das Bromélias, 99, São Paulo, SP',
        rating: 4.8,
      },
      {
        name: 'Be vegan',
        image: 'https://www.freepik.com/free-photo/top-view-healthy-food-immunity-boosting-composition_13108499.htm#query=vegetables%20nutrition&position=2&from_view=keyword',
        phone: '01131550001',
        address: 'Rua da Paz, 101, São Paulo, SP',
        rating: 4.8,
      },
      {
        name: 'Sushi Lovers',
        image: 'https://www.freepik.com/free-photo/sushi-set-with-tuna-salmon-vegetables-ginger-wasabi-side-view_9523063.htm#query=sushi&position=7&from_view=search',
        phone: '01131660001',
        address: 'Rua dos passáros, 1, São Paulo, SP',
        rating: 4.6, 
      },
      {
        name: 'Boteco do Judas',
        image: 'https://www.freepik.com/free-photo/variety-snacks-nuts-with-beer-cups_6143859.htm#page=3&query=brazilian%20snacks&position=10&from_view=search',
        phone: '01132666660',
        address: 'Rua das Causas Perdidas, 171, São Paulo, SP',
        rating: 4.6,
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('restaurants', null, {}),
};