const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const familyHistorySchema = new mongoose.Schema({
    hypertension: Boolean,
    heartDisease: Boolean,
    multiplePregnancy: Boolean,
    birthDefects: Boolean,
    mentalDisorder: Boolean,
    // pregnantWoman: pregnantWomanSchema
});

module.exports.familyHistorySchema = familyHistorySchema;
module.exports.FamilyHistory = mongoose.model('FamilyHistory', familyHistorySchema);
