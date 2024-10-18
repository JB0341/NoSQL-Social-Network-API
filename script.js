const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./config/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userRoutes = require('./routes/api/userRoutes');
const thoughtRoutes = require('./routes/api/thoughtRoutes');

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
