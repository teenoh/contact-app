import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import ContactLists from "./components/Contact_lists";
import Navi from "./components/Navi";
import Login from "./components/Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navi />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route render={() => <p>Page not Found!!</p>} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
