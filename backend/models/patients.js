const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
      ],
  },
  password: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    default: null
  },
  phone: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  favoriteDoctors: [
    {
      doctorName: {
        type: String,
        default: ''
      },
      doctorImage: {
        type: String,
        default: ''
      },
      numberOfReviews: {
        type: Number,
        default: 0
      },
      doctorRole: {
        type: String,
        default: ''
      },
      medicalCenter: {
        type: String,
        default: ''
      }
    }
  ]
});

patientSchema.pre('save', async function(){
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt)
})

patientSchema.methods.genToken = function(){
return jwt.sign({userId:this._id, name:this.name},'tokenhere',{expiresIn:"30d"})
}
patientSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  }

module.exports = mongoose.model('Patient', patientSchema);
