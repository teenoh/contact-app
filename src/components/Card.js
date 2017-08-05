import React, { Component } from "react";
import PropTypes from "prop-types";
import NewCard from "./NewCard"

class Card extends Component {
  constructor(props){
    super(props);

    this.state = {
      edit: false,
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleDelete(){
    this.props.deleteContact(this.props.details);
  }

    handleEdit(editStatus){
    if (editStatus === false){
        return this.setState({edit: false})
    }

    this.setState({edit: true})
  }

  render() {
    let { name, img, number, email } = this.props.details;

    if(this.state.edit === true){
      return (
        <NewCard edit_details={this.props.details} edit={true} handleEdit={this.handleEdit} editContact={this.props.editContact}/>
      )
    }

    return (
      <div className="col-sm-6 col-md-4">
        <div className="card">
          <img className="card-img-top" src={img} alt="banana" />
          <div className="card-block">
            <h4 className="card-title">
              {name}
            </h4>
            <p className="card-text">
              Phone: {number}
            </p>
            <p className="card-text">
              Email: {email}
            </p>
          </div>
          <div className="card-footer">
            <button onClick={this.handleEdit} className="btn btn-primary edit-btn btn-sm">Edit</button>
            <button onClick={this.handleDelete} className="btn btn-danger btn-sm">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }),

  deleteContact: PropTypes.func.isRequired,
};

export default Card;
