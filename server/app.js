require('./db/config');
const express = require('express'),
    morgan = require('morgan'),
    app = express(),
    cookieParser = require('cookie-parser'),
    cors = require('cors'),
    userRouter = require('./routes/secure/users'),
    openRoutes = require('./routes/open/index.js'),
    passport = require('./middleware/authentication'),
    path = require('path');
    

///middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

//OpenRoutes
app.use('/api/users', openRoutes);
app.use('/api/payments', openRoutes)


app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
}


//Authenticated Route
app.use('/api/*', passport.authenticate('jwt', { session:false}));
app.use('/api/users', userRouter);

if (process.env.NODE_ENV === 'production') {
    app.get('*', (request, response) => {
        response.sendFile(
            path.resolve(__dirname, '..', 'client', 'build', 'index.html')
        );
    });
}

module.exports = app;