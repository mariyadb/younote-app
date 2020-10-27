const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: String,
    body: Object,
    auther: String,
    videoLink: String,
    videoTimestamp: Number,
    date: {
        type: Date, default: Date.now
    }
}, {
    timestamp: true,
});

module.exports = Note = mongoose.model('Note', NoteSchema);