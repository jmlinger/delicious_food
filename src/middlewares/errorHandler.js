require('dotenv').config();
const { StatusCodes } = require('http-status-codes');

module.exports = (err, _req, res) => {
  if (err.message === 'jwt expired') {
    return res.status(StatusCodes.UNAUTHORIZED).send(err.message);
  }

  if (process.env.NODE_ENV !== 'production') {
    console.error(err.message);
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err.message);
};
