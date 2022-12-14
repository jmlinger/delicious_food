const { StatusCodes } = require('http-status-codes');
const Models = require('../../database/models');
 
module.exports = async (req, res, _next) => {
  const { user: { id: userId }, body: { restaurantId } } = req;
  await Models.usersRestaurants.create({ userId, restaurantId });

  return res.status(StatusCodes.CREATED).end();
};
