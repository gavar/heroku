var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'w5wint7qi8eljbn0',
    password: 'qx2cr43d1fnvrou4',
    port: 3306,
    database: 'x5rtvh7zceucocr3'
});

connection.connect();

var Notes = {
    getNotes: function (callback) {
        connection.query("SELECT note FROM notes ORDER BY timestamp DESC", function (err, rows, field) {
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