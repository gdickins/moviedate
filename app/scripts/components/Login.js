import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router';
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
    store.session.login(data)
    .then(function(response) {
    });
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
      <header id="loginHeader">
        <h1 id="loginLogo" className="logo"><i className="fa fa-film" aria-hidden="true"></i> Movie Friends</h1>
        <form className="loginForm">
          <input ref="username" type="text" placeholder="username" />
          <input ref="password" type="password" placeholder="password" />
          <button onClick={this.submitHandler} className="btn" type="submit"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
        </form>
          <Link to={`signup`}><input className="btn" type="button" value="New User?"/> </Link>

      </header>

      </div>
    )
  }
})
