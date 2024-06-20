const db = require('../models')

var ServiceDetails = db.serviceDetails

exports.createServiceType = async(req,res) =>{

    try{
        var serviceType= new ServiceDetails({
            userId: req.body.userId,
            serviceType: req.body.serviceType,
            pricePerUnit: req.body.pricePerUnit,
            serviceMeasureType: req.body.serviceMeasureType
        })

        var service= await serviceType.save()

        res.status(201).send({message:"serviceDetails added successfully",service})

    }
    catch(err){
        res.status(400).send({message:err.message})
    }


}

exports.getAllServices = async (req,res) =>{
    try{
        var services = await ServiceDetails.find()

        if(!services){
            res.status(400),send({message:"Nothing to find"})
        }
        else{
            res.status(200).send({message:"List of services",services})
        }
    }
    catch(err){
        res.status(400).send({message:"Somthing went wrong", err:err.message})
    }
    
}