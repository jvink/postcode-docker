var mysql = require('mysql');
const { HOST, USER, PASSWORD, DATABASE } = require("./config");

// connection configurations
module.exports = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
});