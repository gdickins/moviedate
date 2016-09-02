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
      modalDisplay = <DateModal title={this.props.original_title} img={this.props.url} hideModal={this.hideModal}/>
    }
    return (
      <div className="movieTile">
        <img src = {this.props.url} />
        <div className="movieInfo">
          <div className="movieTitle">{this.props.original_title}</div>
          <div className="moviePlot">{this.props.overview}</div>
          <input className="tileBtn" type="button" value="Let's See It!" onClick={this.showModal}/>
        </div>
        {modalDisplay}
      </div>
    )
  }
})

//
