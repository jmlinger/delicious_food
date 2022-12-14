const loginServices = require('../../services/users');
 
module.exports = async (req, res, _next) => {
  const user = req.body;

  const result = await loginServices.login(user);

  return res.status(result.status).json(result.message);
};
