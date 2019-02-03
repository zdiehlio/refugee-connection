import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import { Router } from '@reach/router'
import Application from './Application';
import Dashboard from './Dashboard';
import Home from './Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path='/' />
          <Application path='/application' />
          <Dashboard path='/dashboard' />
        </Router>
      </div>
    );
  }
}

export default App;
