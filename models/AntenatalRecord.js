const mongoose = require('mongoose');
const {pregnantWomanSchema} = require('./PregnantWoman');

const antenatalRecordSchema = new mongoose.Schema({
    date: Date,
    weight: Number,
    bloodPressure: Number,
    complaints: String,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

module.exports.AntenatalRecord = mongoose.model('AntenatalRecord', antenatalRecordSchema);
