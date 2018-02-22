const config = require('../knexfile.js');

const knex = require('knex')(config.development);

return knex;
