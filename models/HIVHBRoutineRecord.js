const mongoose = require('mongoose');
const {pregnantWomanSchema} = require('./PregnantWoman');

const hIVHBRoutineRecordSchema = new mongoose.Schema({
    testName: String,
    date: Date,
    testInterval: Number,
    results: String,
    pregnantWoman: pregnantWomanSchema
});

module.exports.HIVHBRoutineRecord = mongoose.model('HIVHBRoutineRecord', hIVHBRoutineRecordSchema);
