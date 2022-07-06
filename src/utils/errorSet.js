const { StatusCodes } = require('http-status-codes');

const INVALID_ENTRIES = (message) => ({
    status: StatusCodes.BAD_REQUEST,
    message: message.replace(/"/g, ''),
});

const ALREADY_REGISTERED = {
  status: StatusCodes.CONFLICT,
  message: 'User already registered',
};

const INVALID_FIELDS = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid fields',
};

const INVALID_LOGIN = {
  status: StatusCodes.NOT_FOUND,
  message: 'Invalid login',
};

const UNAUTHORIZED_USER = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'Unauthorized user',
};

const USER_NOT_EXISTS = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'User not exists',
};

module.exports = {
  INVALID_ENTRIES,
  ALREADY_REGISTERED,
  INVALID_FIELDS,
  INVALID_LOGIN,
  UNAUTHORIZED_USER,
  USER_NOT_EXISTS,
};