const express = require('express')
const app = express()
const doctorRouter = require('./routes/doctors')
const patientRouter = require('./routes/patients')
const patientsAuthRouter = require('./routes/patientsAuth')
const connectDB = require('./db/connect')
require('dotenv').config()

//middlewares
app.use(express.json())

//routes
app.use('/api/v1/doctors',doctorRouter)
app.use('/api/v1/patients',patientRouter)
app.use('/api/v1/patients/auth',patientsAuthRouter)

const port = process.env.PORT || 3000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000,console.log(`server listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start();