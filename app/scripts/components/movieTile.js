import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';

export default React.createClass({
  openModal: function() {
    console.log("This is the function for rendering the date modal");
  },
  render: function() {
    let urlPath = `http://image.tmdb.org/t/p/w500${this.props.poster_path}`
    console.log(urlPath)
    return (
      <div className="movieTile">
        <span>{this.props.original_title}</span>

        <img src = {`http://image.tmdb.org/t/p/w500${this.props.poster_path}`} />
        <input type = "button" value="Add" onClick={this.openModal}/>
      </div>
    )
  }
})

// <img src={urlPath} />
