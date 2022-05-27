const express = require('express');
const router = express.Router();
const { login, signup } = require('../controllers/usersCtrl');

router.get('/', function (req, res) {
    res.json('yeusus');
});
router.post('/login', login);
router.post('/signup', signup);

module.exports = router;
