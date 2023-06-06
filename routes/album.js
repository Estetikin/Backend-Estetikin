const express = require("express");
const albumController = require('../controllers/album');
const { isLoggedIn } = require('../controllers/auth');
const router = express.Router();


router.post('/album',isLoggedIn,albumController.album);

module.exports = router;