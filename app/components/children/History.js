
var React = require("react");

var History = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">History</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Searches:</h1>
          <p>{this.props.history}</p>
          })

        </div>
      </div>
    );
  }
});


module.exports = History;
