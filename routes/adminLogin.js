const express = require('express');
const router = express.Router();
const Admin = require('../controllers/admin');

/* GET login page. */
router.get('/', Admin.login);

module.exports = router;
