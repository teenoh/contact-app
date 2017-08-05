import React, { Component } from "react";
import PropTypes from 'prop-types'

class NewCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      number: "",
      img: "",
      email: "",
      edit: this.props.edit
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
    let newContact = {}
    newContact.name = this.state.name;
    newContact.number = this.state.number;
    newContact.img = this.state.img;
    newContact.email = this.state.email;

    if (this.state.edit === true ){
      this.props.editContact(newContact, this.props.edit_details.id)
      this.props.handleEdit(false)
      this.setState({edit: false})
    }
    else {
      this.props.addContact(newContact)
    }
    
  }



  render() {
      let { name, img, number, email } = this.props.edit_details;
    
    return (
      <div className="col-sm-3">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.state.edit === true ? 'Edit Contact' : 'Add Contact'}</h4>
            <form onSubmit={this.handleSubmit}>
            <p className="card-text">
              Name:
              <input className="form-control" default={name} onChange={this.handleChangeName.bind(this)} type="text"/>
            </p>
            <p className="card-text">
              Email: 
              <input className="form-control" default={email} onChange={this.handleChangeEmail.bind(this)} type="email"/>
            </p>
            <p className="card-text">
              Phone: 
              <input className="form-control" default={number} onChange={this.handleChangeNumber.bind(this)} type="text"/>
            </p>
            <p className="card-text">
              Image Link: 
              <input className="form-control" default={img} onChange={this.handleChangeImage.bind(this)} type="text"/>
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
    addContact: PropTypes.func,
    editContact: PropTypes.func,
    handleEdit: PropTypes.func,
    edit: PropTypes.bool,
    edit_details: PropTypes.shape({
      name: PropTypes.string,
    img: PropTypes.string,
    number: PropTypes.string,
    email: PropTypes.string
    })
}

NewCard.defaultProps = {
  edit: false,
  edit_details: {
    name: "",
    img: "",
    number: "",
    email: ""
  }
}

export default NewCard;
