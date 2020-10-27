const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScheme = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    numNotes: {
        type: Number
    }
});

module.exports = User = mongoose.model('User', UserScheme);