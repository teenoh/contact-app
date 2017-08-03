import React from "react";
import Card from "./Card"

class ContactLists extends React.Component {
  render() {
    return (
      <div className="row contact_list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default ContactLists;
