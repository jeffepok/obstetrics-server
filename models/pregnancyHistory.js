const {pregnantWomanSchema} = require('./PregnantWoman');

const pregnancyHistorySchema = new mongoose.Schema({
    dateOfDelivery: Date,
    problemEncountered: String,
    durationOfPregnancy: Number,
    placeOfBirth: String,
    modeOfDelivery: String,
    pregnantWoman: pregnantWomanSchema
});

module.exports.pregnancyHistorySchema = pregnancyHistorySchema;
module.exports.PregnancyHistory = mongoose.model('PregnancyHistory', pregnancyHistorySchema);
