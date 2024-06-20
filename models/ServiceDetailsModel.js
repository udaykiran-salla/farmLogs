const { default: mongoose } = require("mongoose");

module.exports= mongoose =>{
    var serviceDetailsSchema = new mongoose.Schema({
        userId: String,
        serviceType:String,
        pricePerUnit:Number,
        serviceMeasureType:String
    })

    var serviceDetails = mongoose.model("ServiceDetails",serviceDetailsSchema)
    return serviceDetails;
}