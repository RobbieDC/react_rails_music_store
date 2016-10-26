var React = require("react");
var Artist = require('./Artist.jsx');

var StockBox = React.createClass({

  render:function(){
    var inventory = this.props.artists.map(function(artist, index){
      if (!artist.albums[0]) {
        var albumName = "no albums";
        var stockLevel = 0;
      } else {
        var albumName = artist.albums[0].name;
        var stockLevel = artist.albums[0].stock;
      }
      return <li value={index} key={index}>{artist.name}: {albumName}, {stockLevel} in stock</li>
    });
    
    return(
      <div>
        <ul>
          {inventory}
        </ul>
      </div>
      )
    }

});

module.exports = StockBox;
