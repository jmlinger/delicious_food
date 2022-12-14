const bcrypt = require('bcryptjs');

const encryptPassword = (password) => bcrypt.hashSync(password, 10);

const verifyPassword = (password, encryptedPassword) =>
  bcrypt.compareSync(password, encryptedPassword);

module.exports = {
  encryptPassword,
  verifyPassword,
};