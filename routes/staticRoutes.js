const express = require('express');
const user = require("../controllers/user");
const urls = require('../controllers/urls');

router = express.Router()

router.get('/', user.restrictToLoggedUsersOnly);
router.get('/login', (req, res) => {res.render('login', data={msg:""})});
router.get('/register', (req, res) => {res.render('register')});
router.post('/add-user', user.HandleAddUser);
router.post('/check-user', user.HandleCheckUser);
router.get('/logout', user.HandleLogOut)
router.post('/add-url', urls.HandleAddUrl);
router.get('/:url', urls.HandleGoToUrl);
router.get('/delete-url/:url', urls.HandleDeleteUrl);

module.exports = router;