var React = require('react');

var NotesList = React.createClass({
    propTypes: {
        notes: React.PropTypes.array.isRequired
    },
    render: function () {
        var notes = this.props.notes.map(function (note, index) {
            return (
                <li key={index} className="list-group-item">{note}</li>
            )
        });
        return (
            <ul className="list-group note-list">
                {notes}
            </ul>
        )
    }
});

module.exports = NotesList;