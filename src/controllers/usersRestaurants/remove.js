const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
 
module.exports = async (req, res, _next) => {
  const { user: { id: userId }, params: { id: restaurantId } } = req;

  await Models.usersRestaurants.destroy({ where: { userId, restaurantId } });

  return res.status(StatusCodes.OK).end();
};
