require('dotenv').config();
const mongoose = require('mongoose');

// mongoDB database connection
const mongo_uri = process.env.mongo_uri;

mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas!');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
