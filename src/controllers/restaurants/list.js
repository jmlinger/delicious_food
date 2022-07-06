const restaurantsServices = require('../../services/restaurants');

module.exports = async (req, res, _next) => {
  const { query, user } = req;
  const result = await restaurantsServices.list(query, user);

  return res.status(result.status).json(result.message);
};
