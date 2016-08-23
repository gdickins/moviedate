import React from 'react';
import { hashHistory } from 'react-router';
import store from '../store';
import DateModal from './DateModal';

export default React.createClass({
  getInitialState: function(){
    return {showModal : false}
  },
  showModal: function(){
    this.setState({
      showModal : true
    });
  },
  hideModal: function(){
    this.setState({showModal : false});
  },
  render: function() {
    let modalDisplay;
    if (this.state.showModal) {
      modalDisplay = <DateModal/>
    }
    return (
      <div className="movieTile">
        <span>{this.props.original_title}</span>
        <img src = {`http://image.tmdb.org/t/p/w500${this.props.poster_path}`} />
        <input type = "button" value="Add" onClick={this.showModal}/>
        {modalDisplay}
      </div>
    )
  }
})
