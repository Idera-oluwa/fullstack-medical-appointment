const express = require('express');
const {getDoctors,getDoctor,createDoctors,postReviews} = require('../controllers/doctors')

const router = express.Router();

router.route('/').get(getDoctors).post(createDoctors)
router.route('/:id').get(getDoctor).post(postReviews)

module.exports = router