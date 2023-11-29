require('dotenv').config()
const connectDB = require('./db/connect')
const Doctors =  require('./models/doctors')
const data = require('./data')

const start = async() =>{
try {
await connectDB(process.env.MONGO_URI)
await Doctors.deleteMany();
await Doctors.create(data)
console.log('success')
process.exit(0)
} catch (error) {
    console.log(error)
    process.exit(1)
}
}

start()