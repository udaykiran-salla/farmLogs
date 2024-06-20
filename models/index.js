const mongoose = require('mongoose')

const db= {}

 db.user = require('./userModel')(mongoose)
 db.formLog = require('./formLogModel')(mongoose)
 db.serviceDetails=require('./ServiceDetailsModel')(mongoose)

 module.exports = db