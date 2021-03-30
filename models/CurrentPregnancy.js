const {pregnantWomanSchema} = require('./PregnantWoman');

const currentPregnancySchema = new mongoose.Schema({
    lastMenstrualPeriodDate: Date,
    pregnancyScanDate: Date,
    estimatedDateOfDelivery: Date,
    firstHeight: Number,
    firstWeight: Number,
    contraceptionUsed: String,
    pregnantWoman: pregnantWomanSchema
});

module.exports.currentPregnancySchema = currentPregnancySchema;
module.exports.CurrentPregnancy = mongoose.model('CurrentPregnancy', currentPregnancySchema);
