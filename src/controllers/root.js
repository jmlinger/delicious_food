const express = require('express');

const root = express.Router({ mergeParams: true });
const usersRouter = require('./users/router');
const restaurantsRouter = require('./restaurants/router');
const usersRestaurantsRouter = require('./usersRestaurants/router');

root.use('/users', usersRouter);
root.use('/restaurants', restaurantsRouter);
root.use('/favres', usersRestaurantsRouter);

module.exports = root;
