const express = require('express');

const root = express.Router({ mergeParams: true });
const usersRouter = require('./users/router');

root.use('/users', usersRouter);

module.exports = root;
