const express = require('express');
const rescue = require('express-rescue');

const create = require('./create');
const login = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/register', rescue(create));
router.post('/login', rescue(login));

module.exports = router;
