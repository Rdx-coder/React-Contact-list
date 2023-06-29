import React from 'react';

const ContactListItem = ({ contact, onDelete }) => {
  const { name, email, phone } = contact; // Destructure the contact object to extract name, email, and phone
  const handleDelete = () => {
    onDelete(contact.id); // Call the onDelete function with the contact id when the delete button is clicked
  };

  return (
    <li>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default ContactListItem;
