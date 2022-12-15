require('dotenv').config();

const {
  NODE_ENV,
  SQL_DIALECT,
  SQL_SSL, SQL_HOST,
  SQL_PORT,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DB_NAME
} = process.env;

const environment = NODE_ENV || 'development';

const suffix = {
  prod: '',
  production: '',
  dev: '-dev',
  development: '-dev',
  test: '',
};

const options = {
  dialect: SQL_DIALECT,
  host: SQL_HOST || 'localhost',
  port: SQL_PORT,
  username: SQL_USER,
  password: SQL_PASSWORD,
  database: `${SQL_DB_NAME || 'delicious-food'}${suffix[environment] || suffix.test}`,
  dialectOptions: {
    timezone: 'Z',
    ssl: {
      require: SQL_SSL || false,
      rejectUnauthorized: false
    }
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
