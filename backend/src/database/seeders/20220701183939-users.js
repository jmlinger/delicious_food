'use strict';

const { encryptPassword } = require("../../utils/bcryptServices");

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name: 'Frederico',
        email: 'fred@graodireto.com.br',
        address: 'Rua das Araras, Jardim dos Pássaros, 412, Araúna, RO.',
        password: encryptPassword('123Fred'),
      },
      {
        name: 'Eduardo',
        email: 'edu@test.com',
        address: 'Rua das Ameixas, Jardim dos Frutos, 229, Gamão, AM.',
        password: encryptPassword('edu6789'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};