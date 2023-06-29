import React, { useState } from 'react';
import { addContact } from '../services/api';

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState(''); // State for storing the name input value
  const [email, setEmail] = useState(''); // State for storing the email input value
  const [phone, setPhone] = useState(''); // State for storing the phone input value

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const newContact = {
      name,
      email,
      phone,
    };

    try {
      const data = await addContact(newContact); // Call the addContact function with the newContact data
      onAdd(data); // Call the onAdd function passed as a prop and pass the new contact data
      setName(''); // Reset the name input value to an empty string
      setEmail(''); // Reset the email input value to an empty string
      setPhone(''); // Reset the phone input value to an empty string
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Contact</h2>
      {/* Input field for name */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {/* Input field for email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {/* Input field for phone */}
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;
