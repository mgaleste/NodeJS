const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    database: 'nodecomplete',
    password: 'Zse45rdx!'
});

module.exports = pool.promise();