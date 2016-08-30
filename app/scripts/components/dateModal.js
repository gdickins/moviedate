import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';
import movieDates from '../collections/movieDates';
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
    store.movieDates.create({
      title : this.props.title,
      url : this.props.img,
      date : this.refs.date.value,
      time : this.refs.time.value,
      location : this.refs.location.value,
      creator : store.session.get('username'),
      attendees : [store.session.get('username')]
    }, {
      success: (data) => {
        this.props.hideModal();
      }
    });
  },
  render: function() {
    return (
      <div style={this.containerStyles}>
      <form onSubmit={this.createDate} style={this.containerStyles}>
      <h1>When would you like to see {this.props.title}?</h1>
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
