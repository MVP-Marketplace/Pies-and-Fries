require('./db/config');

const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    cookieParser = require('cookie-parser'),
    openRoutes = require('./routes/open'),
    path = require('path');

app.use(express.json());

app.use(morgan('dev'));

app.use('/api/users', openRoutes);

app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
}

if (process.env.NODE_ENV === 'production') {
    app.get('*', (request, response) => {
        response.sendFile(
            path.resolve(__dirname, '..', 'client', 'build', 'index.html')
        );
    });
}

module.exports = app;