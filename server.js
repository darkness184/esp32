const express = require('express');
const bodyParser = require('body-parser');
const dbConn = require('./config/db.config');

'use strict';
const mysql = require('mysql');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5500;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Welcome to my web server");
});

// Require employee routes
const informationRoutes = require('./src/routes/information.routes')

// using as middleware
app.use('/api/v1/information', informationRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

////////////////////////////////////////////////////////////
