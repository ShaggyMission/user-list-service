const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const swaggerRoute = require('./routes/swaggerRoute'); 

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);
app.use('/users', swaggerRoute); 

sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`User list service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
