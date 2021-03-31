const router = require('express').Router();
const verify = require('./verifyToken');
const {User} = require('../models/User');;
const {PregnantWoman} = require('../models/PregnantWoman');

router.post('/', verify, (req, res) => {

    let pregnantWoman = {
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
    };
    User.findById(req.user._id).then(user => {
        //If the user doesnt have a pregnant woman field
        if (!user.pregnantWoman) {
            //save the document
            pregnantWoman = new PregnantWoman(pregnantWoman);
            pregnantWoman.save().then((onSuccess) => {
                    user.pregnantWoman = pregnantWoman;
                    console.log(onSuccess);
                    user.save();
                    res.send("Saved!");
                }
            );
        }else{
            PregnantWoman.findById(user.pregnantWoman._id)
                .then(value => {Object.keys(pregnantWoman).forEach((key)=>{
                    value[key] = pregnantWoman[key];
                    value.save().then(saveData => {
                        console.log(saveData);
                        res.send("Changes made");
                    })
                })})
        }
    });
});

// router.get('/', verify, (req, res) =>{
//
// })

module.exports = router;
