const logform = require('../controller/formLogController')

const router=require('express').Router()

router.post("/createLog",logform.createFormLog)

router.get("/getLogs",logform.getLogs)

module.exports = router