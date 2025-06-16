const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'user_service_db',
  process.env.DB_USER || 'admin',
  process.env.DB_PASSWORD || 'PoolG10.11',
  {
    host: process.env.DB_HOST || 'mysql.cwizczqy6pft.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;