const Service=require('./ServiceDetailsModel')
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

    // formlogSchema.pre('save', async function (next) {
    //     const log = this;
    //     console.log("in middleware cost calculation")
    
    //     // Find the service associated with this log
    //     const service = await Service.find(log.serviceType);
    //     if (!service) {
    //         return next(new Error('Service not found'));
    //     }
    
    //     if(service.serviceMeasureType==="Time"){
    //         totalHours=(Math.floor(log.duration/(60*60*1000)))+((Math.floor(duration/(60*1000)))/60)
    //         log.totalCost=totalHours*service.pricePerUnit
    
    //     }else{
    //         log.totalCost=log.numberOfUnits*pricePerUnit
    //     }
    
    
    //     next();
    // });

    var FormLog = mongoose.model("FormLog",formlogSchema)

    return {FormLog,formlogSchema}
}