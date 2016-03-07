var React = require('react');
var NoteList = require('./NoteList');
var SubmitNote = require('./SubmitNote');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var Home = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function () {
        return {
            notes: []
        }
    },
    componentDidMount: function () {

    },
    submitNote: function (note) {
        this.setState(function (state) { state.notes.push(note); });
        console.log("Submit: ", note, " Count: ", this.state.notes.length);
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