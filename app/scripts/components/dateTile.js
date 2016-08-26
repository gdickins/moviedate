import React from 'react';
import store from '../store';

export default React.createClass({
  joinDate: function() {
    let addMe = this.props.attendees.push(store.session.get('username'));
    console.log(addMe);
  },
  render: function() {
    return (
      <div className="dateTile">
        <img src = {`http://image.tmdb.org/t/p/w500${this.props.poster_path}`} />
        <input type="button" value="Join This" onClick={this.joinDate} />
      </div>
    )
  }
})
