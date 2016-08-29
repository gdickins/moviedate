import React from 'react';
import $ from 'jquery';
import MovieDate from '../models/movieDate';
import settings from '../settings';
import store from '../store';
import { hashHistory } from 'react-router';

export default React.createClass({
  containerStyles: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0,0,0,.5)'
  },
  contentStyles: {
    background: 'white',
    width: '75%',
    margin: '0 auto',
    height: '75vh',
    marginTop: '12.5%'
  },
  createDate: function(e) {
    e.preventDefault();
    let newDate = new MovieDate({
      title : this.props.title,
      url : this.props.img,
      date : this.refs.date.value,
      time : this.refs.time.value,
      location : this.refs.location.value,
      creator : store.session.get('username'),
      attendees : [store.session.get('username')]
    }) ;
    console.log(newDate);
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/movieDates`,
      data: JSON.stringify(newDate),
      contentType: 'application/json',
      error: function(e) {console.log(e);}
    })
      .then(() => {
        console.log('It Posted!');
        this.props.hideModal();
      })
  },
  render: function() {
    return (
      <div style={this.containerStyles}>
      <form onSubmit={this.createDate} style={this.containerStyles}>
      <input ref="date" type="date" placeholder="Date"/>
      <input ref="location" type="location" placeholder="Location"/>
      <input ref="time" type="time" placeholder="Time"/>
      <input type="submit" />
      <input type="button" value="Cancel" onClick={this.props.hideModal}/>
      </form>
      </div>
    )
  }
})
