const express = require('express');
const rescue = require('express-rescue');

const { auth } = require('../../middlewares');
const create = require('./create');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', rescue(auth), rescue(create));
router.delete('/', rescue(auth), rescue(remove));

module.exports = router;
