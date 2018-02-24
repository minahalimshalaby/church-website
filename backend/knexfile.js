// Update with your config settings.

const { username, password } = require('./database/auth.js');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'test',
      user: username,
      password: password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
