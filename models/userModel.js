// const { default: mongoose } = require("mongoose");

module.exports= mongoose =>{

    var userSchema = new mongoose.Schema({
        email: {
            type : String,
            required: true,
            trim: true,
            index: { unique: true }
        },
        password:{
            type : String,
            required : true
        },
        name:{
            type : String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
            validate: {
              validator: function(v) {
                return /^\d{10}$/.test(v);
              },
              message: props => `${props.value} is not a valid 10-digit phone number!`
            }
        },
        address:{
            type : String,

        }
    })

    var User = mongoose.model('User', userSchema)

    return User
}