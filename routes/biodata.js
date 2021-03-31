const router = require('express').Router();
const verify = require('./verifyToken');
const {User} = require('../models/User');;
const {PregnantWoman} = require('../models/PregnantWoman');

router.post('/', verify, (req, res) =>{

    const pregnantWoman = new PregnantWoman({
        surname: req.body.surname,
        firstName: req.body.firstName,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
        dateOfBirth: req.body.dateOfBirth,
        occupation: req.body.occupation,
        education: req.body.education,
        maritalStatus: req.body.maritalStatus,
        district: req.body.district,
        region: req.body.region,
        emergencyName: req.body.emergencyName,
        emergencyContact: req.body.emergencyContact,
        emergencyTransportContact: req.body.emergencyTransportContact
    });
    User.findById(req.user._id, (err, user) =>{
        //If the user doesnt have a pregnant woman field
        if(!user.pregnantWoman){
            //save the document
            pregnantWoman.save().then(
                (onSuccess)=>{
                    console.log(onSuccess)
                },
                (onError) =>{
                    console.log(onError)})
            user.pregnantWoman = pregnantWoman;
            user.save();
            res.send("Saved p woman");
        }
        else{
            //if the user has, update the fields
            user.pregnantWoman = pregnantWoman;
            console.log(user)
            user.save((err, value) =>{
                res.send("Updated pregnant woman fields");
            });

            User.findById(req.user._id,(err, user) =>{
                console.log("==============printing user from database===========" + req.user._id)
                console.log(user);
            });


        }

    })


});

// router.get('/', verify, (req, res) =>{
//
// })

module.exports = router;
