const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const obstetricHistorySchema = new mongoose.Schema({
    numberOfPregnancies: Number,
    numberOfBirths: Number,
    numberOfAbortions: Number,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

module.exports.obstetricHistorySchema = obstetricHistorySchema;
module.exports.ObstetricHistory = mongoose.model('ObstetricHistory', obstetricHistorySchema);
