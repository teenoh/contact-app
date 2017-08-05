import React from "react";
import Card from "./Card";
import NewCard from "./NewCard";
import SearchBar from "./SearchBar";
import base from "../api/base";

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
      contact_list: list,
      search_list: []
    };

    this.searchContact = this.searchContact.bind(this);
    this.addContact = this.addContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  componentDidMount() {
    this.contactsRef = base.syncState("contacts", {
      context: this,
      state: "contact_list",
      asArray: true
    });
    
    base.bindToState('contacts', {
      context: this,
      state: 'search_list',
      asArray: true
    });

  }

  componentWillUnmount() {
    base.removeBinding(this.contactsRef);
  }

  searchContact(name) {
    const search_list = this.state.contact_list;

    const new_list = search_list.filter(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    this.setState({ search_list: new_list });

    if (name === "") {
      this.setState({ search_list: this.state.contact_list });
    }
  }

  addContact(details) {
    const prevList = this.state.contact_list;
    const new_list = [...prevList, details];
    this.setState({
      contact_list: new_list,
      search_list: new_list
    });
  }

  deleteContact(details) {
    const prev_list = this.state.contact_list;
    const new_list = prev_list.filter(
      item => item.name !== details.name && item.number !== details.number
    );
    this.setState({
      contact_list: new_list,
      search_list: new_list
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <SearchBar search={this.searchContact} />
        </div>

        <div className="row contact_list">
          {this.state.search_list.map((contact, index) =>
            <Card
              details={contact}
              key={index}
              deleteContact={this.deleteContact}
            />
          )}
          <NewCard addContact={this.addContact} />
        </div>
      </div>
    );
  }
}

export default ContactLists;
