// 3rd party packages
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

// Routes imports
const dateRoute = require('./api/routes/date.routes');
const indexRoute = require('./api/routes/index.routes');

// Middleware
app.use(
    cors({
        origin: true,
        methods: ['GET', 'OPTIONS', 'HEAD'],
    })
);
app.use(morgan('dev'));

// Routes
app.use('/', indexRoute);

app.use('/api', dateRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: 'URL Not Found' });
});

module.exports = app;
