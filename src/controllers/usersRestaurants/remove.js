const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
 
module.exports = async (req, res, _next) => {
  const { userId, restaurantId } = req.body;

  await Models.usersRestaurants.destroy({ where: { userId, restaurantId } });

  return res.status(StatusCodes.OK).end();
};
