// information.routes.js
const express = require('express')

const router = express.Router()

const informationController =   require('../controllers/information.controller');

// Get all employees
router.get('/', informationController.getAll);

module.exports = router
