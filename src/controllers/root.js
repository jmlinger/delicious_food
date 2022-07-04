const express = require('express');

const root = express.Router({ mergeParams: true });
const usersRouter = require('./users/router');
const restaurantsRouter = require('./restaurants/router');

root.use('/users', usersRouter);
root.use('/restaurants', restaurantsRouter);

module.exports = root;
