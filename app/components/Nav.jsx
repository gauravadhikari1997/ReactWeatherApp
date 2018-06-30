var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    alert('working on it');
  },
  render: function(){
    return(
    <div className="top-bar">
      <div className="float-left">
        <ul className="menu">
          <li className="menu"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
        </ul>
      </div>
      <div className="float-right">
        <ul className="menu">
        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
        </ul>
      </div>
    </div>
    );
  }
});

module.exports = Nav;
