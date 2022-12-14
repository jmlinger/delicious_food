const restaurantsServices = require('../../services/restaurants');

module.exports = async (req, res, _next) => {
  const { params: { id: restaurantId }, user: { id: userId } } = req;

  const result = await restaurantsServices.getById(restaurantId, userId);

  return res.status(result.status).json(result.message);
};
