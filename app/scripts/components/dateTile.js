import React from 'react';
import store from '../store';
import Backbone from 'backbone';
import movieDate from '../models/movieDate';
import _ from 'underscore';

export default React.createClass({
  // getInitialState: function(){
  //   return {attending : ''}
  // },
  joinDate: function() {
    let id = this.props.id;
    let modifiedList = store.movieDates.get(id).get('attendees');
    let alertMessage;
    if(this.props.attendees.indexOf(localStorage.username) > -1) {
      alertMessage = "You have cancelled your attendance";
      modifiedList = _.without(modifiedList, localStorage.username);
    } else {
      alertMessage = "You have joined this event";
      modifiedList = modifiedList.concat(localStorage.username);
    }
    alert(alertMessage);
    store.movieDates.get(id).save({
      attendees: modifiedList
    });
  },
  render: function() {
    let guests;
    if(this.props.attendees.length === 1) {
      guests = 'Person is';
    } else {
      guests = 'People are';
    }
    let buttonValue;
    if(this.props.attendees.indexOf(localStorage.username) > -1) {
      buttonValue = "Cancel!";
    } else {
      buttonValue = "Join!"
    }
    return (
      <div className="dateTile">
        <img src = {this.props.url} />
        <div className="dateInfo">
          <div className="dateGuests">
            {this.props.attendees.length} {guests} attending.
          </div>
          <div className="dateMovie">
            <span>{this.props.title}</span> created by <span>{this.props.creator}</span>
          </div>
          <div className="dateTime">
            {this.props.date} at {this.props.time}
          </div>
          <div className="moviePlot">{this.props.overview}</div>
        </div>

        <input className="dateTileBtn" type="button" value={buttonValue} onClick={this.joinDate} />
      </div>
    )
  }
})
