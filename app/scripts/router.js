import {Router, Route, hashHistory} from 'react-router';
import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import DateList from './components/DateList';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/home" component={Home} />
    <Route path="/dates" component={DateList} />
  </Router>
)
