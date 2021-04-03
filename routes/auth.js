const User = require('../controllers/user');
const router = require('express').Router();

//Register Route
router.post('/register', User.register);
//login
router.post('/login', User.login);


module.exports = router;
