import React, { Component } from "react";

import {BrowserRouter as Router,
        Route,
        Switch } from 'react-router-dom'

import Contact_lists from './components/Contact_lists'
import Navi from './components/Navi'
import Login from './components/Login'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navi />
          <Switch>
            <Route exact path='/' component={Contact_lists} />
            <Route exact path='/login' component={Login} />
            <Route render={() => <p>Page not Found!!</p>} />          
          </Switch>
        </div> 
       </Router> 
    );
  }
}

export default App;
