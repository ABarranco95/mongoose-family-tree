const express = require('express');
const app = express();


app.use(express.urlencoded({extended: false}));

//Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree');

// Shortcut to the monhgoose connection
const db = mongoose.connection;
db.once('open', () => {
    // Printing to see what host and port MongoDB is on.
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
})

// log any database errors
db.on('error', (err) => {
    console.log(`Database error: ${err}`)
})

app.get('/', (req, res) => {
    res.send('Mongoose')
});

const PORT = process.eventNames.PORT || 3000;

app.listen(PORT, () => {
    console.log(`I'm Listening on PORT: ${PORT}`)
});