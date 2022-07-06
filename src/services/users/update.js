const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
const { encryptPassword } = require('../../utils/bcryptServices');
const { INVALID_ENTRIES, USER_NOT_EXISTS } = require('../../utils/errorSet');
const { updateUserValidation } = require('../../utils/validations/updateUser');

module.exports = async (user) => {
  const validationError = updateUserValidation(user);

  if (validationError) {
      return INVALID_ENTRIES(validationError.message);
  }
  
  const { id, name, email, address, password } = user;

  const findUser = await Models.users.findOne({ where: { id } });

  if (!findUser) {
      return USER_NOT_EXISTS;
  }

  const passwordHash = encryptPassword(password);

  await Models.users.update(
    { name, email, address, password: passwordHash },
    { where: { id } },
  );
  
  const updatedUser = await Models.users.findOne({ where: { id }, exclude: { password } });

  delete updatedUser.dataValues.password;

  return { status: StatusCodes.CREATED, message: { updatedUser } };
};
