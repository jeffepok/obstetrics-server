//Import models
const {PregnantWoman} = require("../models/PregnantWoman");
const {FamilyHistory} = require('../models/FamilyHistory');
const {ObstetricHistory} = require('../models/ObstetricHistory');
const {MaternalMedicalHistory} = require('../models/MaternalMedicalHistory');
const {HIVHBRoutineRecord} = require('../models/HIVHBRoutineRecord');
const {PregnancyHistory} = require('../models/PregnancyHistory');
const {PregnancyInvestigation} = require('../models/PregnancyInvestigation');
const {AntenatalRecord} = require('../models/AntenatalRecord');
const {MedicalStaff} = require('../models/MedicalStaff');
const {SocialHistory} = require('../models/SocialHistory');
const {CurrentPregnancy} = require('../models/CurrentPregnancy');
const {User} = require('../models/User');

//An async function that updates the pregnant woman data
async function updatePregnantWomanData(req,field, model){
    const user = await User.findById(req.user._id);
    //Get the pregnant woman collection
    const pregnantWoman = await PregnantWoman.findById(user.pregnantWoman._id);
    //Check if there is data in that field already
    if(!pregnantWoman[field]){
        //If there is no field create an empty object
        let newData = {};
        //loop through the request body and assign the data to the newData object created
        for (const field of Object.keys(req.body)) {
            newData[field] = req.body[field];
        }
        //Assign the pregnant woman field of the new data field with id of the user's pregnant woman field
        //This is done to establish a relationship between the smaller data and the big big pregnant woman data
        newData["pregnantWoman"] = user.pregnantWoman._id;
        //Create a model of the new data
        newData = new model(newData);
        //Save to database
        await newData.save();
        //Assign the new data to the field in the pregnant woman
        pregnantWoman[field] = newData;
        //Save the pregnant woman to database
        await pregnantWoman.save();
    }
    else{
        //if the field exist already get the field object from the model using the id from the pregnant woman
        field = await model.findById(pregnantWoman[field]);

        //loop through the keys of request body and update the model parameter one after the other
        for (const fieldOfRequest of Object.keys(req.body)) {
            await model.updateOne({_id: field._id}, {[fieldOfRequest] : req.body[fieldOfRequest]})
        }
    }
}

module.exports = {
    updateBiodata: async (req, res) =>{
        const user = await User.findById(req.user._id);
        if(!user.pregnantWoman){
            let pregnantWoman = {};
            for (const field of Object.keys(req.body)) {
                pregnantWoman[field] = req.body[field];
            }
            pregnantWoman = new PregnantWoman(pregnantWoman);
            await pregnantWoman.save();
            user.pregnantWoman = pregnantWoman;
            await user.save();
            res.status(200).send("Created new biodata")
        }
        else{
            const pregnantWoman = await PregnantWoman.findById(user.pregnantWoman)
            for (const field of Object.keys(req.body)) {
                await PregnantWoman.updateOne({_id: pregnantWoman._id}, {[field] : req.body[field]})
            }
            res.status(200).send("Updated biodata");
        }

    },
    updateFamilyHistory: async (req, res) =>{
        await updatePregnantWomanData(req, "familyHistory", FamilyHistory);
        res.status(200).send("Updated familyHistory");
    },
    updateObstetricHistory: async (req, res) =>{
        await updatePregnantWomanData(req, "obstetricHistory", ObstetricHistory);
        res.status(200).send("Updated obstetricHistory");
    },
    updateMaternalMedicalHistory: async (req, res) =>{
        await updatePregnantWomanData(req, "maternalMedicalHistory", MaternalMedicalHistory);
        res.status(200).send("Updated maternalMedicalHistory");
    },
    updateHIVHBRoutineRecord: async (req, res) =>{
        await updatePregnantWomanData(req, "hIVHBRoutineRecord", HIVHBRoutineRecord);
        res.status(200).send("Updated HIVHBRoutineRecord");
    },
    updatePregnancyHistory: async (req, res) =>{
        await updatePregnantWomanData(req, "pregnancyHistory", PregnancyHistory);
        res.status(200).send("Updated pregnancyHistory");
    },
    updatePregnancyInvestigation: async (req, res) =>{
        await updatePregnantWomanData(req, "pregnancyInvestigation", PregnancyInvestigation);
        res.status(200).send("Updated pregnancyInvestigation");

    },
    updateAntenatalRecord: async (req, res) =>{
        await updatePregnantWomanData(req, "antenatalRecord", AntenatalRecord);
        res.status(200).send("Updated antenatalRecord");

    },
    updateMedicalStaff: async (req, res) =>{
        await updatePregnantWomanData(req, "medicalStaff", MedicalStaff);
        res.status(200).send("Updated medicalStaff");

    },
    updateSocialHistory: async (req, res) =>{
        await updatePregnantWomanData(req, "socialHistory", SocialHistory);
        res.status(200).send("Updated socialHistory");

    },
    updateCurrentPregnancy: async (req, res) =>{
        await updatePregnantWomanData(req, "currentPregnancy", CurrentPregnancy);
        res.status(200).send("Updated currentPregnancy");

    },

}
