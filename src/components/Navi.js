import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class Navi extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        <NavLink className="navbar-brand" activeClassName="active" exact to="/">
                Contact-List App
            </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" activeClassName="active" exact to="/Login">
                Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navi;
