import React from 'react';
import Backbone from 'backbone';
import { Link } from 'react-router';
import store from '../store';
import DateTile from './dateTile';
import $ from 'jquery';
import settings from '../settings';
import movieDates from '../collections/movieDates';

export default React.createClass({
  getInitialState: function() {
    return {
      dateList: []
    }
  },
  componentDidMount: function() {
    store.movieDates.fetch();
    store.movieDates.on('change update', this.changeState)
  },
  componentWillUnmount: function() {
    store.movieDates.off('change update', this.changeState);
  },
  changeState: function() {
    this.setState({
      dateList:store.movieDates.toJSON()
    });
  },
  render: function() {
    let dateList = this.state.dateList.map(function(date, i, arr){
      return (
        <DateTile key={i} title={date.title} attendees={date.attendees} creator={date.creator} url={date.url} id={date._id}/>
      )
    })
    return (
      <div>
      <header>
      <h1>Date List</h1>
      <Link to={`home`}><input type="button" value="Back to Home"/> </Link>
      <input type="button" value="Log out" onClick={store.session.logout} />
      </header>
      <main>
      {dateList}
      </main>
      </div>
    )
  }
})
