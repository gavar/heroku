var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_BASE
});

connection.connect();

var Notes = {
    getNotes: function (callback) {
        connection.query("SELECT note FROM notes ORDER BY timestamp DESC LIMIT 50", function (err, rows, field) {
            callback(rows);
        })
    },
    submitNote: function (note, callback) {
        connection.query("INSERT INTO notes (note) VALUES('" + note + "')", function (err, rows, field) {
            callback(err);
        });
    }
};

module.exports = Notes;