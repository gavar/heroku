var React = require('react');
var NoteList = require('./NoteList');
var SubmitNote = require('./SubmitNote');

var Home = React.createClass({
    getInitialState: function () {
        return {
            notes: []
        }
    },
    componentDidMount: function () {
        this.baseURL = location.protocol + "//" + location.host;
        this.fetchNotes();
    },
    fetchNotes: function () {
        let $this = this;
        $.ajax({
            method: 'GET',
            url: this.baseURL + "/get-notes"
        }).done(function (response) {
            $this.setState(function (state) { state.notes = response; });
        });
    },
    submitNote: function (note) {
        let $this = this;
        $.ajax({
            method: 'POST',
            url: this.baseURL + "/submit-note?note=" + note
        }).done(function (response) {
            console.log(response);
            $this.fetchNotes();
        });
    },
    render: function () {
        return (
            <div className="note-container">
                <h2>Submit Yout Note</h2>
                <SubmitNote onSubmit={this.submitNote}/>
                <NoteList notes={this.state.notes}/>
            </div>
        )
    }
});

module.exports = Home;