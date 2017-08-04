import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import base from "../api/base"

const list = [
  {
    name: "Teenoh",
    img: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg",
    number: "081923320",
    email: "teenoh@gmail.com"
  },
  {
    name: "Chibbie",
    img: "https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg",
    number: "081243556",
    email: "chibbie@gmail.com"
  }
];

class ContactLists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact_list: list
    };

    this.searchContact = this.searchContact.bind(this);
  }

  componentWillMount(){
    this.contactsRef = base.syncState('contacts'
    , {
      context: this,
      state: 'contact_list',
      asArray: true
    })
  }


  componentWillUnmount(){
    base.removeBinding(this.contactsRef);
  }

  searchContact(name) {
    const new_list = list.filter(
      item => item.name.toLowerCase().includes(name.toLowerCase())
    );
    this.setState({ contact_list: new_list });
    console.log(name);
  }

  render() {
    return (
      <div>
        <div className="row">
          <SearchBar search={this.searchContact} />
        </div>

        <div className="row contact_list">
          {this.state.contact_list.map((contact, index) =>
            <Card details={contact} key={index} />
          )}
        </div>
      </div>
    );
  }
}

export default ContactLists;
