const {pregnantWomanSchema} = require('./PregnantWoman');

const medicalStaffSchema = new mongoose.Schema({
    name: String,
    type: String,
    phoneNumber: String,
    pregnantWoman: pregnantWomanSchema
});

module.exports.medicalStaffSchema = medicalStaffSchema;
module.exports.MedicalStaff = mongoose.model('MedicalStaff', medicalStaffSchema);
