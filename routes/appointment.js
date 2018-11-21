const express = require('express');
const router = express.Router();

const Appointment = require('../models/appointmentModel');


//@route  POST api/appointment
//@desc   Create An Appointment
//@access Public
router.post('/', async (req, res) => {
    console.log(req)
    const newAppointment = await new Appointment({
        name: req.body.name,
        date: req.body.date,
        email: req.body.email,
        tel: req.body.tel,
        barber: req.body.barber,
        price: req.body.price
    });
    newAppointment.save()
        .then(item => { 
            res.json(item); 
        })
        .catch(err => console.log(err)) 
});

module.exports = router;



