const {pregnantWomanSchema} = require('./PregnantWoman');

const antenatalRecordSchema = new mongoose.Schema({
    date: Date,
    weight: Number,
    bloodPressure: Number,
    complaints: String,
    pregnantWoman: pregnantWomanSchema
});

module.exports.AntenatalRecord = mongoose.model('AntenatalRecord', antenatalRecordSchema);
