var React = require('react');
var StockBox = require('./StockBox.jsx');

var AlbumForm = React.createClass({

  getInitialState: function() {
    return {name: '', stock: ''};
  },

  handleArtistChange: function(event) {
    this.setState({name: event.target.value});
  },

  handleStockChange: function(event) {
    this.setState({stock: event.target.value});
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var name = this.state.name.trim();
    var stock = this.state.stock.trim();
    if (!name || !stock) {
      return;
    }
    // TODO: send request to the server
    this.props.onAlbumSubmit({
      albums: {
        name: name,
        stock: stock
      }
    });
    this.setState({name: '', stock: ''});
  },

  render: function() {
    var options = this.props.artists.map(function(artist, index) {
      return <option key={index} value={index}> {artist.name} </option>
    })
    return (
      <div>
      <select className="artistForm" onSubmit={this.handleSubmit}>{options}</select>
        <input
          type="text"
          placeholder="Album name"
          value={this.state.name}
          onChange={this.handleArtistChange}
        />
        <input type="submit" value="Post" />
      </div>
    );
  }
});

module.exports = AlbumForm;
