const express = require('express')
const Doctors = require('../models/doctors')

const getDoctors = async (req,res) =>{
   try {
      const {name} = req.query;
      const queryObject = {}
      if (name){
      queryObject.name = {$regex:name, $options:'i'};
      }
      const doctors = await Doctors.find(queryObject)
      res.status(201).json({doctors,nbHits:doctors.length})
   } catch (error) {
      res.status(404).json({msg:error})
   }
}
const getDoctor = async(req,res) =>{
   try {
   const {id:doctorId} = req.params
   const doctor = await Doctors.findById({_id:doctorId})
   res.status(201).json({doctor})
   } catch (error) {
      res.status(404).json({msg:error})
   }
}
const createDoctors = async (req,res) =>{
  try {
   const doctors = await Doctors.create(req.body)
   res.status(201).json({doctors})
  } catch (error) {
   res.status(404).json({msg:error})
  }
 }
 const postReviews = async(req,res) =>{
   const {id:doctorId} = req.params;
   const {stars, clientName, dateOfReview,clientImage, comment} = req.body
   const doctor = await Doctors.findById({_id:doctorId})
   if(!doctor){
      res.status(404).json({err:`doctor with ID ${doctorId} not found`})
   }
   doctor.reviews.push({stars,clientName,dateOfReview,clientImage,comment})
   await doctor.save();
  res.status(201).json({doctor})
 }

 module.exports = {
    getDoctors, 
    getDoctor,
    createDoctors,
    postReviews
 }