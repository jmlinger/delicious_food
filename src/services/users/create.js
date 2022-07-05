const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { encryptPassword } = require('../../utils/bcryptServices');
const { INVALID_ENTRIES, ALREADY_REGISTERED } = require('../../utils/errorSet');
const { registerValidation } = require('../../utils/validations/register');

module.exports = async (user) => {
  const validationError = registerValidation(user);

  if (validationError) {
      return INVALID_ENTRIES(validationError.message);
  }

  const { name, email, address, password } = user;
  const passwordHash = encryptPassword(password);

  const findUser = await Models.users.findOne({ where: { email } });

  if (findUser) {
      return ALREADY_REGISTERED;
  }

  await Models.users.create({ name, email, address, password: passwordHash });

  return { status: StatusCodes.CREATED };
};
