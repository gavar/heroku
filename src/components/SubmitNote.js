var React = require('react');

var SubmitNote = React.createClass({
    propTypes: {
        onSubmit: React.PropTypes.func.isRequired
    },
    setRef: function (ref) {
        this.note = ref;
    },
    onSubmit: function () {
        var value = this.note.value;
        this.note.value = '';
        this.props.onSubmit(value);
    },
    render: function () {
        return (
            <form className="input-group" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" placeholder="New Note" ref={this.setRef} ons/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Submit</button>
                </span>
            </form>
        )
    }
});

module.exports = SubmitNote;