const mongoose = require('mongoose');
const {userSchema} = require('./User');
const {familyHistorySchema} = require('./FamilyHistory');
const {maternalMedicalHistorySchema} = require('./MaternalMedicalHistory');
const {pregnancyHistorySchema} = require('./pregnancyHistory');
const {medicalStaffSchema} = require('./MedicalStaff');
const {currentPregnancySchema} = require('./CurrentPregnancy');
const {obstetricHistorySchema} = require('./ObstetricHistory');
const {pregnancyInvestigationSchema} = require('./PregnancyInvestigation');
const {socialHistorySchema} = require('./SocialHistory');

const pregnantWomanSchema = new mongoose.Schema({
    surname:{
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    firstName:{
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    address:{
        type: String,
        max: 1024,
        min: 3
    },
    phoneNumber:{
        type: String,
        max: 255,
        min: 3
    },
    country:{
        type: String,
        max:255,
        min: 3
    },
    dateOfBirth:{
        type: Date,
    },
    occupation: String,
    education: String,
    maritalStatus: String,
    district: String,
    region: String,
    emergencyName: String,
    emergencyContact: String,
    emergencyTransportContact: String,
    hIVHBRoutineRecord: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'HIVHBRoutineRecord'}
        ],
    antenatalRecord: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'AntenatalRecord'},
    ],
    medicalStaff: {type: mongoose.Schema.Types.ObjectId, ref: 'MedicalStaff'},
    pregnancyHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'PregnancyHistory'},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    maternalHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'MaternalMedicalHistory'},
    socialHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'SocialHistory'},
    obstetricHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'ObstetricHistory'},
    familyHistory: {type: mongoose.Schema.Types.ObjectId, ref: 'FamilyHistory'},
    pregnancyInvestigation: {type: mongoose.Schema.Types.ObjectId, ref: 'PregnancyInvestigation'},
    currentPregnancy: {type: mongoose.Schema.Types.ObjectId, ref: 'CurrentPregnancy'}
});

module.exports.pregnantWomanSchema = pregnantWomanSchema;
module.exports.PregnantWoman = mongoose.model('PregnantWoman', pregnantWomanSchema);
