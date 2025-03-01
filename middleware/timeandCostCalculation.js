const db = require('../models')
const formlog=require('../models/formLogModel')
let formlogSchema=db.formLog
const Service = db.serviceDetails
formlogSchema.schema.pre('save', async function (next) {
    const log = this;
    console.log("in middleware cost calculation")

    // Find the service associated with this log
    const service = await Service.findOne({serviceType:log.serviceType});
    if (!service) {
        return next(new Error('Service not found'));
    }

    if(service.serviceMeasureType==="Time"){
        totalHours=(Math.floor(log.duration/(60*60*1000)))+((Math.floor(duration/(60*1000)))/60)
        log.TotalCost=totalHours*service.pricePerUnit

    }else{
        log.TotalCost=log.numberOfUnits*pricePerUnit
    }


    next();
});

