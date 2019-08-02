const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    //Models;
    Employee = require('./api/models/Employee'),
    bodyParser = require('body-parser');
//Environment Variables
require('dotenv').config();


// mongoose instance connection url connection
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const routes = require('./api/routes/employee'); //importing route
routes(app); //register the route

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to React Demo API!'
    })
});

app.listen(port, () => {
    // For Local Testing
    // Use RoboMongo
    // mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true });

    // Heroku API
    mongoose.connect(process.env.MONGODB_URI)

    mongoose.connection
        .once('open', () => {
            console.log(`Started on Heroku`)
            console.log(' Hikeathon API Now Running!')
        })
        .on('error', error => {
            console.warn('Warning', error)
        })
})