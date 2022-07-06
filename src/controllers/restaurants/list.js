const restaurantsServices = require('../../services/restaurants');

module.exports = async (req, res, _next) => {
  const { query } = req;
  const result = await restaurantsServices.list(query);

  return res.status(result.status).json(result.message);
};
