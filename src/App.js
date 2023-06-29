import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { fetchContacts, deleteContact } from './services/api';
import './styles.css'; // Import the CSS file

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleDeleteContact = async (contactId) => {
    try {
      await deleteContact(contactId); // Delete the contact with the specified ID from the API
      setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== contactId)); // Remove the contact from the local state
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const data = await fetchContacts(); // Fetch contacts from the API
        setContacts(data); // Update the contacts in the local state
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    getContacts();
  }, []);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]); // Add the new contact to the local state
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ContactForm onAdd={handleAddContact} /> {/* Render the ContactForm component and pass the handleAddContact function as a prop */}
      <ContactList contacts={contacts} onDelete={handleDeleteContact} /> {/* Render the ContactList component and pass the contacts and handleDeleteContact function as props */}
    </div>
  );
};

export default App;
