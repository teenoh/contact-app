import React, { Component } from "react";
import {Redirect, Link} from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props);

        this.state ={
            authenticated: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        this.setState({authenticated: true})
    }


  render() {
    if (this.state.authenticated == true){
        return (
            <Redirect to={{
                pathname: '/'
            }}/>
        )
    }

    return (
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-8">
          <h2 className="signin-header">Sign in</h2>
          <form className="form-group form-items" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Confirm identity
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
