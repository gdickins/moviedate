import React from 'react';
import { Link } from 'react-router';
import store from '../store';
import DateTile from './dateTile';
import $ from 'jquery';
import settings from '../settings';

export default React.createClass({
  getInitialState: function() {
    return {
      dateList: []
    }
  },
  componentDidMount: function() {
    $.ajax({
      type: 'GET',
      url: `https://baas.kinvey.com/appdata/${settings.appKey}/movieDates`,
      success: (data) => {
        console.log('server returns this', data);
        this.setState({dateList: data})
      }
    })
  },
  render: function() {
    let dateList = this.state.dateList.map(function(date, i, arr){
      return (
        <DateTile key={i} title={date.title} attendees={date.attendees} creator={date.creator} url={date.url}/>
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
