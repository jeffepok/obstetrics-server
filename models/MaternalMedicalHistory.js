const mongoose = require('mongoose');
const {pregnantWomanSchema} = require('./PregnantWoman');

const maternalMedicalHistorySchema = new mongoose.Schema({
    hypertension: Boolean,
    heartDisease: Boolean,
    sickle_cell: Boolean,
    allergies: String,
    pregnantWoman: pregnantWomanSchema
});

module.exports.maternalMedicalHistorySchema = maternalMedicalHistorySchema;
module.exports.MaternalMedicalHistory = mongoose.model('MaternalMedicalHistory', maternalMedicalHistorySchema);
