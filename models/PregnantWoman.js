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
    medicalStaff: medicalStaffSchema,
    pregnancyHistory: pregnancyHistorySchema,
    user: userSchema,
    maternalHistory: maternalMedicalHistorySchema,
    socialHistory: socialHistorySchema,
    obstetricHistory: obstetricHistorySchema,
    familyHistory: familyHistorySchema,
    pregnancyInvestigation: pregnancyInvestigationSchema,
    currentPregnancy: currentPregnancySchema
});

module.exports.pregnantWomanSchema = pregnantWomanSchema;
module.exports.PregnantWoman = mongoose.model('PregnantWoman', pregnantWomanSchema);
