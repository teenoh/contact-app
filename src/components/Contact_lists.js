import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

class ContactLists extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <SearchBar />
        </div>

        <div className="row contact_list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default ContactLists;
