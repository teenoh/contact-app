import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="form-group search-bar col-sm-8">
          <input className="form-control" type="search" placeholder="Search" />
          
          <input type="submit" className="btn btn-primary login-btn"/>
      </div>
    );
  }
}

export default SearchBar;
