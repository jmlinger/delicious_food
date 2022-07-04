const restaurantsServices = require('../../services/restaurants');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const result = await restaurantsServices.getById(id);

  return res.status(result.status).json(result.message);
};
