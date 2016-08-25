import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <div>
      <header>
      <h1>Date List</h1>
      <Link to={`home`}><input type="button" value="Back to Home"/> </Link>
      </header>
      </div>
    )
  }
})
