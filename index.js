// Importing Modules
const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const connect_to_database = require('./services/database_connection');
const staticRoute = require('./routes/staticRoutes')

// Creating App
const app = express()

// Setting View Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database Connection
connect_to_database(process.env.DB_URL)

// Routes
app.use('/', staticRoute)

// Port
app.listen(process.env.PORT, () => {console.log("Server is running on 'http://192.168.1.7:" + process.env.PORT + "'");});