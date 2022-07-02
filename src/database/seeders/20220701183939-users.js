'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Leonardo',
        email: 'leo@test.com',
        address: 'Rua das Araras, Jardim dos Pássaros, 412, Araúna, RO.',
        password: 'leo1234',
      },
      {
        name: 'Eduardo',
        email: 'edu@test.com',
        address: 'Rua das Ameixas, Jardim dos Frutos, 229, Gamão, AM.',
        password: 'edu6789',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};