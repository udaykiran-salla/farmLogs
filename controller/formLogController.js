const db = require('../models')
const moment = require('moment');
var FormLog = db.formLog

// function calculateTotalTime(startTime,endTime){
//     if(startTime && endTime){
//         var hours=Math.floor((endTime-startTime)/(1000*60*60))
//         var minutes= Math.floor((((endTime-startTime)%(1000*60*60))/(1000*60)))
//         console.log(hours,minutes)
//         var totalTime=new Date()
//         totalTime.setHours(hours,minutes,0,0)
//         console.log(totalTime)
//         return totalTime
//     }
//     else{
//         return 0
//     }

// }

exports.createFormLog= async( req , res )=>{

    var {startDateTime,endDateTime} = req.body;
    // console.log({startDateTime,endDateTime})
    startDateTime=moment(startDateTime)
    endDateTime=moment(endDateTime)
    // var duration = moment.duration(endDateTime.diff(startDateTime));
    var duration = endDateTime.diff(startDateTime);
    totalTime= `${Math.floor(duration/(60*60*1000))}:${Math.floor((duration%(60*60*1000))/(60*1000))}`

    // console.log(duration)
    // console.log({startDateTime});
    // console.log({endDateTime});

    if(endDateTime<=startDateTime){
        res.status(400).send({
            message: "End time can not be prior to start time"
        })
    };
    
    // let totalTime = endDateTime-startDateTime;
    // console.log({totalTime});

    try{
        var formlog = new FormLog({
            provider_id : req.body.provider_id,
            consumer_id : req.body.consumer_id,
            startTime : startDateTime.toDate(),
            endTime : endDateTime.toDate(),
            // totalTime : calculateTotalTime(startTime,endTime),
            totalTime,
            NumberOfUnits : req.body.NumberOfUnits,
            serviceType : req.body.serviceType,
            TotalCost:0
        })

        let log= await formlog.save()

        res.status(201).send({message:"Logged Successfully",log})

    }
    catch(err){
        res.status(400).send({message: err.message})
    }

}

exports.getLogs = async( req , res )=>{

    var logs= await FormLog.find()
    if(!logs){
        res.send({message:"error"})
    }
    res.send(logs)


}