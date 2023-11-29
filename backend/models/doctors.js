const mongoose = require('mongoose')

const clientReviewSchema = new mongoose.Schema({
    stars: {
      type: Number,
      required: true
    },
    clientImage: String,
    clientName: {
      type: String,
      required: true
    },
    dateOfReview: {
      type: Date,
      default: Date.now
    },
    comment: String,
    // You can add more fields related to client reviews as needed
  });
  
  const experienceSchema = new mongoose.Schema({
    institutionName: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    department: String,
    employmentPeriod: {
      start: {
        type: Date,
        required: true
      },
      end: Date
    }
  });
  

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      medicalCenter: {
        type: String,
        required: true
      },
      stars: {
        type: Number,
        default: 0
      },
      reviews: [clientReviewSchema],
      image: {
        type: String,
      },
      about: {
        type: String,
        required: true
      },
      specialist: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      topDoctor:{
        type:String,
        default:false
      },
      patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
      }],
      experience: [experienceSchema],
    });

module.exports = mongoose.model('doctorSchema',DoctorSchema)