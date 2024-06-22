// Importing Modules
const mongoose = require('mongoose')

// Defining Schema
const userSchema = mongoose.Schema({
    username : {type:String, required:true, unique:true},
    email : {type:String, required:true, unique:true},
    password: {type:String, required:true}
});

const urlSchema = mongoose.Schema({
    long_url : {type:String, required:true},
    short_url :{type:String, required:true, unique:true},
    createdBy : {type:String, required:true}
});

// Creating Models Out Of Schema
const User = mongoose.model('users', userSchema);
const Url = mongoose.model('urls', urlSchema);

// Exporting The Models
module.exports = {User, Url};