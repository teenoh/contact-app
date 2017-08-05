import React, { Component } from "react";
import cloudinary from 'cloudinary-core'
import PropTypes from 'prop-types'

class NewCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      number: "",
      img: "",
      email: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName(e){
    this.setState({name: e.target.value})
  }

  handleChangeEmail(e){
    this.setState({email: e.target.value})
  }

  handleChangeImage(e){
    this.setState({img: e.target.value})
  }

  handleChangeNumber(e){
    this.setState({number: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const newContact = this.state
    this.props.addContact(newContact)
  }

  render() {
    return (
      <div className="col-sm-3">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Add Contact</h4>
            <form onSubmit={this.handleSubmit}>
            <p className="card-text">
              Name:
              <input className="form-control" onChange={this.handleChangeName.bind(this)} type="text"/>
            </p>
            <p className="card-text">
              Email: 
              <input className="form-control" onChange={this.handleChangeEmail.bind(this)} type="email"/>
            </p>
            <p className="card-text">
              Phone Number: 
              <input className="form-control" onChange={this.handleChangeNumber.bind(this)} type="text"/>
            </p>
            <p className="card-text">
              Image Link: 
              <input className="form-control" onChange={this.handleChangeImage.bind(this)} type="text"/>
            </p>
            <input className="form-control btn btn-primary login-btn" type="submit"/>
            </form>
          </div>
      
        </div>
      </div>
    );
  }
}

 NewCard.propTypes = {
    addContact: PropTypes.func.isRequired,
}


export default NewCard;
