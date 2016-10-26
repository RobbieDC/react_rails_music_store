var React = require("react");
var StockBox = require("./StockBox");
var ArtistForm = require("./ArtistForm");
var AlbumForm = require('./AlbumForm');

var MusicBox = React.createClass({

  getInitialState:function(){
    return { artists:[], focusCountry:null }
  },

  componentDidMount: function() {
    var url = "http://localhost:3000/api/artists/";
    var request = new XMLHttpRequest();
    request.open( "GET", url );
    request.onload = function() {
      if( request.status === 200 ) {
        console.log("request had loaded");
        var data = JSON.parse(request.responseText);
        console.log(data);
        this.setState({artists: data});
      }
    }.bind(this);
    request.send(null);
  },

  handleArtistSubmit: function(artist) {
    console.log(artist);
    var artists = this.state.artists;
    var newArtist = artists.concat([artist.artist])

    var url = "http://localhost:3000/api/artists/";
    var request = new XMLHttpRequest();
    request.open( "POST", url );
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function() {
      if( request.status === 200 ) {
        console.log("request had loaded");
        var responseData = JSON.parse(request.responseText);
        console.log(this.state.artists);
        this.setState({artists: newArtist});
      }
    }.bind(this);
    request.send(JSON.stringify(artist));
  },

  render:function(){
    
    return(
      <div>
        <h2>Music Store</h2>
        <ArtistForm 
          onArtistSubmit={this.handleArtistSubmit}
          artists={this.state.artists}></ArtistForm>
          <AlbumForm
            artists={this.state.artists}></AlbumForm>
          <StockBox artists={this.state.artists}></StockBox>
      </div>
      )
    }

})

module.exports = MusicBox;
