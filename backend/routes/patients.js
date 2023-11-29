const express = require('express')
const {getPatients, getPatient,editPatient} = require('../controllers/patients')

const router = express.Router()

router.route('/').get(getPatients)
router.route('/:id').get(getPatient).patch(editPatient)

module.exports = router