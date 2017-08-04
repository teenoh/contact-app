import React, { Component } from "react";
import PropTypes from 'prop-types'

class SearchBar extends Component {
  constructor(props){
      super(props);

      this.state = {
        input: ""
      }
      
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.search(this.state.input)
  }

  handleChange(e){
    this.setState({input: e.target.value})
    this.props.search(this.state.input)
  }

  render() {
    return (
      <form className="form-group search-bar col-sm-8" onSubmit={this.handleSubmit}>
          <input className="form-control" type="text"  onChange={this.handleChange}/>
          
          <input type="submit" className="btn btn-primary login-btn"/>
      </form>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
}

export default SearchBar;
