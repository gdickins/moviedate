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
    background: 'rgba(0,0,0,.7)'
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
      overview : this.props.overview,
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
      <form id="modalForm" onSubmit={this.createDate} style={this.containerStyles}>
      <h1 id="modalHeader">When would you like to see {this.props.title}?</h1>
      <input className="modalInput" ref="date" type="date" min="2016-08-30" max="2020-08-30" placeholder="Date"/>
      <input className="modalInput" ref="location" type="location" placeholder="Location"/>
      <input className="modalInput" ref="time" type="time" placeholder="Time"/>
      <button className="modalSubmit" type="submit"><i className="fa fa-ticket" aria-hidden="true"></i></button>
      <input className="btn" id="modalCancel" type="button" value="Find a Different Movie" onClick={this.props.hideModal}/>
      </form>
      </div>
    )
  }
})
