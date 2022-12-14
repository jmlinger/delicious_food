/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-lines-per-function */
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

  const findUser = await Models.users.findOne({ where: { id: user.id } });
  
  if (!findUser) {
    return USER_NOT_EXISTS;
  }
  
  const delUserKeyRules = {
    0: 'id',
    1: 'name',
    2: 'email',
    3: 'address',
    4: 'password',
  };

  Object.values(user).forEach((value, index) => !value && delete user[delUserKeyRules[index]]);
  
  user.password && (user.password = encryptPassword(user.password));

  findUser.set(
    { ...user },
  );

  await findUser.save();
  
  const updatedUser = await Models.users.findOne(
    { where: { id: user.id }, attributes: { exclude: ['password'] } },
);

  return { status: StatusCodes.CREATED, message: updatedUser };
};
