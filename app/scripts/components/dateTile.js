import React from 'react';
import store from '../store';

export default React.createClass({
  joinDate: function() {
    if(this.props.attendees.indexOf(localStorage.username) > -1) {
      console.log('You are already attending this movie!');
    }
    // this.props.attendees.push(localStorage.username);
    console.log("attendees",this.props.attendees);
    console.log("creator", this.props.creator);

  },
  render: function() {
    let buttonValue;
    if(this.props.attendees.indexOf(localStorage.username) > -1) {
      buttonValue = "Cancel Your Attendance!";
    } else {
      buttonValue = "Join This Movie!"
    }
    return (
      <div className="dateTile">
        <span>{this.props.title} created by {this.props.creator}</span>
        <img src = {this.props.url} />
        <input type="button" value={buttonValue} onClick={this.joinDate} />
      </div>
    )
  }
})

// <img src = {`http://image.tmdb.org/t/p/w500${this.props.poster_path}`} />
