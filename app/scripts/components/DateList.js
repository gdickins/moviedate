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
        <DateTile key={i} title={date.title} attendees={date.attendees} date={date.date} time={date.time} creator={date.creator} url={date.url} id={date._id}/>
      )
    })
    return (
      <div>
      <header>
      <h1 className="logo"><i className="fa fa-film" aria-hidden="true"></i> Movie Friends</h1>
      <Link to={`home`}><button className="btn" type="button"><i className="fa fa-home" aria-hidden="true"></i></button></Link>
      <button className="btn" onClick={store.session.logout}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
      </header>
      <main>
      {dateList}
      </main>
      </div>
    )
  }
})
