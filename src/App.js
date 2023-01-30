import { nanoid } from 'nanoid';
// import PropTypes from "prop-types";

import React, { Component } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

// import ReactDOM from "react-dom";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
   const saveContacts = localStorage.getItem('contacts');
   if(saveContacts !== null) {
    const parsedContacts = JSON.parse(saveContacts)
   this.setState({contacts: parsedContacts})
   } 
  }

  componentDidUpdate(prevProps, prevState) {
    const {contacts} = this.state;
    if(contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }


  addContact = (data) => {
    // console.log(data);
    const contacts = this.state.contacts;
    const coincidenceName = contacts.map((item) => item.name).includes(data.name);
    const coincidenceNumber = contacts.map((item) => item.number).includes(data.number);

    if(coincidenceName) {
     alert(`The entered ${data.name} already exists in contacts! Please enter another name!`);
     return;
    } else if(coincidenceNumber) {
      alert(`The entered ${data.number} already exists in contacts! Please enter another number!`);
    } else if (data.name.length === 0) {
     alert('Fields must be filled!')
    } else {
      const newObject = {
        id: nanoid(), ...data,
      }

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newObject],
      }))
      }
    }


   checkingContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
   }

   deleteContact = contactItemId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactItemId),
    }))
   }

   filterChange = event => {
    this.setState({ filter: event.target.value });
  };

  // handleSubmit= event => {
  //   event.preventDefault();
  //   this.reset();

  //   this.props.onSubmit({ ...this.state });
  // }


  // reset = () => {
  //   this.setState(({
  //     contacts: [{ name: '', number: '' }],
  //     }))
  // }

//   propsFromForm = data => {
//     console.log(data);
//   }

//   propsContactList = prop => {
//   console.log(prop);
//  }

//   propsFilter = user => {
//     console.log(user);
//   }

  render() {
    const {filter} = this.state;
    const checkingContacts = this.checkingContact();

    return (
      <div>
        <h1 title="Phonebook">Phonebook</h1>
        <ContactForm onProps={this.addContact}/>

        <h2 title="Contact">Contact</h2>

        <Filter value={filter} onChange={this.filterChange}/>
        {checkingContacts.length > 0 && (
        <ContactList items={checkingContacts} onDelete={this.deleteContact}/>)}
      </div>
    );
  }
}

