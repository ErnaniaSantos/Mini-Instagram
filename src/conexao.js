const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '122010',
        database: 'mini_insta'
    }
});

module.exports = knex;