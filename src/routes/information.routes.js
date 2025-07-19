// information.routes.js
const express = require('express')

const router = express.Router()

const informationController =   require('../controllers/information.controller');


router.get('/test/', informationController.getAll);

router.get('/temp_humi/get', informationController.get_temp_humi);

router.get('/test/read/:id/', informationController.read);

router.post('/test/create', informationController.create);

router.post('/temp_humi/insert', informationController.insert);

router.put('/test/update', informationController.update);

router.delete('/test/delete/:id/', informationController.delete);

module.exports = router
