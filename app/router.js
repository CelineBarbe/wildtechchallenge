const express = require('express');
const router = express.Router();

const mainController = require ('./controllers/mainController');

// Routage

router.get('/', mainController.homePage);
router.post('/', mainController.handleForm);

module.exports = router;