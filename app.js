// 3rd party packages
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

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

// Routes
app.use('/', indexRoute);

app.use('/api', dateRoute);

app.use((req, res, next) => {
    res.status(404).json({ message: 'URL Not Found' });
});

// Server
const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});

module.exports = app;
