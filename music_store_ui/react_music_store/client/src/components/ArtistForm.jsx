var React = require('react');
var StockBox = require('./StockBox.jsx');

var ArtistForm = React.createClass({

  getInitialState: function() {
    return {name: ''};
  },

  handleArtistChange: function(event) {
    this.setState({name: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var name = this.state.name.trim();
    if (!name) {
      return;
    }
    // TODO: send request to the server
    this.props.onArtistSubmit({
      artist: {
        name: name
      }
    });
    this.setState({name: ''});
  },

  render: function() {
    return (
      <div>
      <form className="artistForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Artist name"
          value={this.state.name}
          onChange={this.handleArtistChange}
        />
        <input type="submit" value="Post" />
      </form>
      </div>
    );
  }
});

module.exports = ArtistForm;
