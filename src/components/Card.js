import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="card">
          <img className="card-img-top" src="https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg" alt="banana"/>
          <div className="card-block">
            <h4 className="card-title">Name</h4>
            <p className="card-text">
              Phone Number: 08109912890
            </p>
            <p className="card-text">
              Email: teenoh@gmail.com
            </p>
            
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
