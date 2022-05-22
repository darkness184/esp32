// information.routes.js
const express = require('express')

const router = express.Router()

const informationController =   require('../controllers/information.controller');

// Get all employees
router.get('/test/', informationController.getAll);

router.get('/test/read/:id/', informationController.read);

router.post('/test/create', informationController.create);

router.put('/test/update', informationController.update);

router.delete('/test/delete/:id/', informationController.delete);

module.exports = router
