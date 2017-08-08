import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
//import base from "../api/base"
import firebase from 'firebase'
//import {Link} from 'react-router-dom'
import ContactLists from "./Contact_lists"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: null,
      authenticated: false,
      owner: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
  }

  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`)
    
  switch(provider){
    case 'facebook':
      provider = new firebase.auth.FacebookAuthProvider(); 
      break;
    
      case 'twitter':
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      
      case 'github':
        provider = new firebase.auth.GithubAuthProvider();
        break;
      
      default:
        break;
    }

  firebase.auth().signInWithPopup(provider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
    let authData = {token: token, user: user}
    return this.authHandler(null,authData)
  }).catch((error) => {
    var errorDetails = {}
    errorDetails.errorCode = error.code;
    errorDetails.errorMessage = error.message;
    errorDetails.email = error.email;
    errorDetails.credential = error.credential
    return this.authHandler(errorDetails,null)
  })
  }

  authHandler(err, authData){
    if(err !== null){
      console.log(err)
      return;
    }
    console.log(authData)

    this.setState({uid: authData.user.uid})

    //grab contact list info
    //const storeRef = base.database().ref("contacts")

    //query firebase once for store data
    // storeRef.once('value', (snapshot) => {
    //   const data = snapshot.val() || {};

    //   if(!data.owner){
    //     storeRef.set({
    //       owner: authData.user.uid
    //     });
    //   }
    // })    
  }

  handleSubmit() {
    this.setState({ authenticated: true });
  }

  renderLogin() {
    return (
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-8">
          <h2 className="signin-header">Sign in</h2>

          <button
            onClick={() => this.authenticate("facebook")}
            className="btn btn-primary btn-md col-sm-4 offset-sm-4 facebook"
          >
            Facebook
          </button>
          <button
            onClick={() => this.authenticate("github")}
            className="btn btn-success btn-md col-sm-4 offset-sm-4 github"
          >
            Github
          </button>
          <button
            onClick={() => this.authenticate("twitter")}
            className="btn btn-primary btn-md col-sm-4 offset-sm-4 twitter"
          >
            Twitter
          </button>
        </div>
      </div>
    );
  }

  render() {
    // const logout = (
    //   <button className="btn btn-primary btn-md col-sm-4 offset-sm-4 twitter">
    //     Logout!!
    //   </button>
    // );
    //check if user is not logged in
    if (!this.state.uid) {
      return this.renderLogin();
    }

    // if (this.state.uid !== this.state.owner) {
    //   return (
    //     <div>
    //       <p>Sorry, you aren't the owner of this list</p>
    //       {logout}
    //     </div>
    //   );
    // }

    return (
      <ContactLists />
    );
  }
}

export default Login;
