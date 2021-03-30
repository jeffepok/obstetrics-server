const {pregnantWomanSchema} = require('./PregnantWoman');

const pregnancyInvestigationSchema = new mongoose.Schema({
    investigationType: String,
    finding: String,
    dateOfInvestigation: Date,
    pregnantWoman: pregnantWomanSchema
});

module.exports.pregnancyInvestigationSchema = pregnancyInvestigationSchema;
module.exports.PregnancyInvestigation = mongoose.model('PregnancyInvestigation', pregnancyInvestigationSchema);
