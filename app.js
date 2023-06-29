require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connetToDb = require('./config/db');

const app = express();
// express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

// DB Connection
connetToDb();

const routes = require('./routes/routes')

app.use('/', routes);

module.exports = app;