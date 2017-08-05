import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  render() {
    let { name, img, number, email } = this.props.details;
    return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src={img} alt="banana" />
          <div className="card-block">
            <h4 className="card-title">
              {name}
            </h4>
            <p className="card-text">
              Phone Number: {number}
            </p>
            <p className="card-text">
              Email: {email}
            </p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary edit-btn btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
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
  })
};

export default Card;
