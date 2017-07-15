var React = require("react");
var Form = React.createClass({

  getInitialState: function() {
    return { term: "" };
  },

  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

  handleSubmit: function(event) {
  event.preventDefault();

    this.props.setTerm(this.state.term);
    this.setState({ term: "" });

    
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Article Search</strong>
              </h4>

                <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <input
                value="01-01-2000"
                type="date"
                className="form-control"
                id="startdate"
                required
              />
              <input
                value="01-01-2000"
                type="date"
                className="form-control"
                id="enddate"
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
