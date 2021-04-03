const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const familyHistorySchema = new mongoose.Schema({
    hypertension: Boolean,
    heartDisease: Boolean,
    multiplePregnancy: Boolean,
    birthDefects: Boolean,
    mentalDisorder: Boolean,
    pregnantWoman: {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
});

module.exports.familyHistorySchema = familyHistorySchema;
module.exports.FamilyHistory = mongoose.model('FamilyHistory', familyHistorySchema);
