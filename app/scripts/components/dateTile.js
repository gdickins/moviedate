import React from 'react';
import store from '../store';
import Backbone from 'backbone';

export default React.createClass({
  // getInitialState: function(){
  //   return {attending : ''}
  // },
  joinDate: function() {
    let modifiedList;
    let id = this.props.id;
    if(this.props.attendees.indexOf(localStorage.username) > -1) {
      modifiedList = store.movieDates.get(id);
      // modifiedList.attendees.splice(this.props.attendees.indexOf(localStorage.username), 1);
    } else {
      modifiedList = store.movieDates.get(id);
      // modifiedList.attendees.push(localStorage.username);
    }
    console.log("id", id);
    console.log("attendees", store.movieDates.get(id));
    // $.ajax({
    //   type: 'PUT',
    //   url: `https://baas.kinvey.com/appdata/${settings.appKey}/movieDates/${this.props.id}`,
    //   data: JSON.stringify(this.props.attendees),
    //   contentType: 'application/json',
    //   error: function(e) {console.log(e);}
    // })
    // .then(() => {
    //
    // })
  },
  render: function() {
    console.log('render');
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
