const db = require('../models')
const User=db.user

const bcryptjs = require('bcryptjs')



exports.createUser= async( req , res)=>{
  try{
    var user = new User({
        email : req.body.email,
        password : bcryptjs.hashSync(req.body.password,8),
        name : req.body.name,
        phoneNumber : req.body.phoneNumber,
        address : req.body.address

    })

   await user.save()

   user = user.toObject()
   delete user.password

   res.status(201).send({message:'Created successfully', user})
  }
  catch(err){
    res.status(400).send({message:`creation of user failed`, err})
  }


}

exports.getUsers= async( req , res )=>{

    try{
       let user= await User.find()

        res.status(200).send(user)
    }
    catch(err){
        res.status(400).send({message:'somthing went wrong',err})
    }

}