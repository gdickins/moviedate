import React from 'react';
import { Link } from 'react-router';
import dateTile from './dateTile';
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
        this.setState({dateList: data})
      }
    })
  },
  render: function() {
    let dateList = this.state.dateList.map(function(date, i, arr){
      return (
        <dateTile key={i} original_title={date.original_title} poster_path={date.poster_path} />
      )
    })
    return (
      <div>
      <header>
      <h1>Date List</h1>
      <Link to={`home`}><input type="button" value="Back to Home"/> </Link>
      </header>
      </div>
    )
  }
})
