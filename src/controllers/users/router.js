const express = require('express');
const rescue = require('express-rescue');

const { auth } = require('../../middlewares');
const create = require('./create');
const login = require('./login');
const update = require('./update');

const router = express.Router({ mergeParams: true });

router.post('/register', rescue(create));
router.post('/login', rescue(login));
router.put('/update', rescue(auth), rescue(update));

module.exports = router;
