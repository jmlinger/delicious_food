const express = require('express');
const rescue = require('express-rescue');

const list = require('./list');
const getById = require('./getById');
const { auth } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.get('/search', rescue(auth), rescue(list));
router.get('/:id', rescue(auth), rescue(getById));

module.exports = router;
