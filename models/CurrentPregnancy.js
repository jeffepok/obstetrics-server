const mongoose = require('mongoose');
const {pregnantWomanSchema} = require('./PregnantWoman');

const currentPregnancySchema = new mongoose.Schema({
    lastMenstrualPeriodDate: Date,
    pregnancyScanDate: Date,
    estimatedDateOfDelivery: Date,
    firstHeight: Number,
    firstWeight: Number,
    contraceptionUsed: String,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

module.exports.currentPregnancySchema = currentPregnancySchema;
module.exports.CurrentPregnancy = mongoose.model('CurrentPregnancy', currentPregnancySchema);
