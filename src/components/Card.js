import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
          <div className="card-block">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
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
