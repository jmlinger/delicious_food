const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
 
module.exports = async (req, res, _next) => {
  const { body } = req;

  await Models.usersRestaurants.create(body);

  return res.status(StatusCodes.CREATED).end();
};
