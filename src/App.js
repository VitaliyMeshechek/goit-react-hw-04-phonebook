import { nanoid } from 'nanoid';
// import PropTypes from "prop-types";

import { useEffect, useState } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Filter } from './components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';

// import ReactDOM from "react-dom";


export const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const saveContacts = localStorage.getItem('contacts');
    if(saveContacts !== null) {
     const parsedContacts = JSON.parse(saveContacts)
    setContacts(parsedContacts)}
  }, []);

  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);


   const addContact = (data) => {
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
       };

       setContacts(prevContacts =>
         [...prevContacts, newObject],
       )
       }
     };


    const checkingContact = () => {
     return contacts.filter(contact =>
     contact.name.toLowerCase().includes(filter.toLowerCase())
     );
    }

    const deleteContact = contactItemId => {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== contactItemId),
     )
    };

    const filterChange = event => {
      setFilter(event.target.value);
   };

   const checkingContacts = checkingContact();

   return (
     <div>
       <h1 title="Phonebook">Phonebook</h1>
       <ContactForm onProps={addContact}/>

       <h2 title="Contact">Contact</h2>

       <Filter value={filter} onChange={filterChange}/>
       {checkingContacts.length > 0 && (
       <ContactList items={checkingContacts} onDelete={deleteContact}/>)}
     </div>
   );
}


