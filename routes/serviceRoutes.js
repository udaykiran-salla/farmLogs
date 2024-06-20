const serviceDetails = require('../controller/serviceDetailsController')

const router = require('express').Router()

router.post("/createService",serviceDetails.createServiceType)

router.get('/getServices',serviceDetails.getAllServices)

module.exports = router;


