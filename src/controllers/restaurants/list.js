const restaurantsServices = require('../../services/restaurants');

module.exports = async (req, res, _next) => {
  const { search } = req.query;
  const result = await restaurantsServices.list(search);

  return res.status(result.status).json(result.message);
};
