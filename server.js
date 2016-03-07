var express = require('express');
var app = express();
var notesSQL = require('./private/notes-sql');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function (req, res) {
    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function () {
    console.log('Our app is running on http://localhost:' + port);
});

// REST
app.get('/get-notes', function (request, response) {
    notesSQL.getNotes(function (notes) {
        notes = notes.map(function (x, index) {return x.note});
        response.status(200).send(notes);
    });
});

app.post('/submit-note', function (request, response) {
    notesSQL.submitNote(request.query.note, function (result) {
        var exist = result === null ? 'NO' : 'YES';
        response.status(200).send(exist);
    });
});