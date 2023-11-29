const Patients = require('../models/patients')

const getPatients = async (req,res) =>{
const patients = await Patients.find({})
res.status(200).json({patients})
}
const getPatient = async (req,res) =>{
    const {id:patientId} = req.params;
    const patient = await Patients.findById({_id:patientId})
    res.status(200).json({patient})
}
const editPatient = async (req,res) =>{
    const {id:patientId} = req.params;
    const newData =  req.body
    const patient = await Patients.findOneAndUpdate({_id:patientId,newData})
    res.status(200).json({patient})
}

module.exports= ({
    getPatients, getPatient,editPatient
})