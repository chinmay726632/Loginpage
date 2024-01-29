const path  = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const get404Controller = require('../controllers/error')


router.get('/',get404Controller.get404Controller);

module.exports = router;
