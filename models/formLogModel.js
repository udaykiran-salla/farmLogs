
module.exports=mongoose=>{
    var formlogSchema= new mongoose.Schema({
        provider_id:{
            type : String,
            required : true
        },

        consumer_id : {
            type : String,
            required : true
        },
        startTime:{
            type:Date,
            required : true
        },
        endTime : {
            type : Date,
            required : true
        },
        totalTime : {
            type : String,
            default:" "
        },
        numberOfUnits:{
            type: Number,
            default:0
        },
        serviceType:String,
        TotalCost:Number
    })

    var FormLog = mongoose.model("FormLog",formlogSchema)

    return FormLog
}