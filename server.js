const app = require('./app');
const sequelize = require('./config/database');

const PORT = 3005;

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
