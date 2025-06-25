const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const swaggerRoute = require('./routes/swaggerRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/users', swaggerRoute);

module.exports = app;
