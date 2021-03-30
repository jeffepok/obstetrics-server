
const administratorSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    password: String,
    dateCreated: Date,
    email: String
});

module.exports.Administrator = mongoose.model('Administrator', administratorSchema);
