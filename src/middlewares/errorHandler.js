require('dotenv').config();
const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err);
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
};
