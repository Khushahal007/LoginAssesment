
const mongoose = require("mongoose");

const MONGO_URL = 'your url';
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo db connect successful");
    })
    .catch((err) => {
        console.log("Mongo db connection failed", err);
    });

const db = mongoose.connection;

db.on("error", (err) => {
    console.log("Mongo db connection failed", err);
});

module.exports = mongoose;

