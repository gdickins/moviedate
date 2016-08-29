import React from 'react';
import { Link } from 'react-router';
import {hashHistory} from 'react-router';
import store from '../store';


export default React.createClass({
  getInitialState: function() {
    return {};
  },
  updateState: function() {
    this.setState(store.session.toJSON());
  },
  componentDidMount: function() {
    store.session.on('change', this.updateState);
  },
  componentWillUnmount: function() {
    store.session.off('change', this.updateState);
  },
  submitHandler: function(e) {
    e.preventDefault();
    var data = Object.keys(this.refs).reduce((returnSoFar, curr, i, arr) => {
      returnSoFar[curr] = this.refs[curr].value;
      return returnSoFar;
    }, {})
    console.log(data);
    store.session.signup(data);
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    if (nextState.authtoken) {
      hashHistory.push('/home');
      return false;
    } else {
      return true;
    }
  },
  render: function() {
    return (
      <div>
      <header>
        <h1>Movie Date</h1>
      </header>
      <form onSubmit={this.submitHandler}>
        <input ref="username" type="text" placeholder="username" />
        <input ref="email" type="email" placeholder="email" />
        <input ref="password" type="password" placeholder="password" />
        <input ref="verifyPassword" type="password" placeholder="verify password" />
        <input type="submit" value="submit" />
      </form>
      <Link to={`/`}> <input type="button" value="Already a Member?"/> </Link>
      </div>
    )
  }
})
