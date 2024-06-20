const user=require('../controller/userController')

const router = require('express').Router()

router.post('/create',user.createUser)

router.get('/usersList',user.getUsers)

module.exports = router