const mongoose = require('mongoose')

const db= {}

 db.user = require('./userModel')(mongoose)
 const formLog = require('./formLogModel')(mongoose)
 db.formLog=formLog.FormLog
 db.formlogSchema=formLog.formlogSchema
 db.serviceDetails=require('./ServiceDetailsModel')(mongoose)

 module.exports = db