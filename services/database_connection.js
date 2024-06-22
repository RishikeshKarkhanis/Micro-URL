// Importing Modules
const mongoose = require('mongoose');

// A Function To Connect To MongoDB Database
const connect_to_database = (url) => 
{
    mongoose.connect(url)
    .then(() => {console.log("MongoDB Connected!");})
    .catch((err) => {console.log(err);})
}

// Exporting Modules
module.exports = connect_to_database;