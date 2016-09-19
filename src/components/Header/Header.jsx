var React = require('react');

var Header = React.createClass({

  componentDidMount: function () {
    console.log('Header.componentDidMount');
  },

  componentWillUnmount: function () {
    console.log('Header.componentWillUnmount');
  },
  render: function(){
    return (
      <span className="">
        <h2 className="">
          How would you like to create your account?
        </h2><br/>
      </span>);
  }
});

module.exports = Header;
