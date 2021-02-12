const express = require('express'),
    morgan = require('morgan'),
    app = express();

app.use(express.json());

app.use(morgan('dev'));

module.exports = app;