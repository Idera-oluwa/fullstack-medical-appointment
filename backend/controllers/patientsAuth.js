const Patient = require('../models/patients')

const register = async (req,res) =>{
const patient = await Patient.create(req.body)
const token = patient.genToken()
res.status(201).json({token})
}

const login = async (req,res) =>{
const {email, password} = req.body
if(!email || !password){
    res.status(404).json({msg:"please provide email and password"})
}
const patient = await Patient.findOne({email})
if(!patient){
    res.status(401).json({msg:"invalid user credentials"})
}
const token = patient.genToken()
const isPasswordCorrect = await patient.comparePassword(password)
if(!isPasswordCorrect){
    res.status(401).json({msg:"invalid user credentials"})
}
res.status(201).json({token, patient})
}

module.exports = { register, login}