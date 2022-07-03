const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { INVALID_ENTRIES, INVALID_LOGIN } = require('../../utils/errorSet');
const { genToken } = require('../auth');
const { loginValidation } = require('../../utils/validations/login');
const { verifyPassword } = require('../../utils/bcryptServices');

module.exports = async (user) => {
  const validationError = loginValidation(user);

  if (validationError) {
    return INVALID_ENTRIES(validationError.message);
  }

  const findUserByEmail = await Models.users.findOne({ where: { email: user.email } });
  
  if (!findUserByEmail || !verifyPassword(user.password, findUserByEmail.password)) {
    return INVALID_LOGIN;
  }

  delete findUserByEmail.dataValues.password;
  
  const token = genToken(findUserByEmail);

  return { status: StatusCodes.OK,
     message: { token, user: { ...findUserByEmail.dataValues } } };
};
