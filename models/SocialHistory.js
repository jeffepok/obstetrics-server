const mongoose = require('mongoose');
// const {pregnantWomanSchema} = require('./PregnantWoman');

const socialHistorySchema = new mongoose.Schema({
    alcohol: Boolean,
    smoking: Boolean,
    pregnantWoman: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'PregnantWoman'}
    ]
});

module.exports.socialHistorySchema = socialHistorySchema;
module.exports.SocialHistory = mongoose.model('SocialHistory', socialHistorySchema);
