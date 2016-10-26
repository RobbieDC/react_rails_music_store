var React = require('react');
var Artist = React.createClass({

  render: function(){

    return (
      <div className="artist">
        <h4 className="artistName">
        {this.props.name}
        </h4>
        {this.props.children}
        </div>
      )
  }

});

module.exports = Artist;