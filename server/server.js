const express = require("express");
const mongoose = require("mongoose");
const note = require('./models/note');
const app = express();
const DB_PATH = "mongodb://localhost:27017/younote_app?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const API_PORT = process.env.PORT || 8080;

app.use(express.json());

//database = mongodb://localhost:27017/younote_app
mongoose.connect(DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => console.log(err));

app.post("/", (req, res) => {
    const { title, author, body } = req.body;

    let newNote = new note({
        title,
        author,
        body
    });
    newNote
        .save()
        .then((note) => {
            console.log("Note saved");
            res.json(note);
        }).catch(err => {
            console.log('Error saving note');
            res.send('Error.');
        });
});


app.listen(API_PORT, () => console.log(`Listing on port ${API_PORT}`));