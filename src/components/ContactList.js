import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {/* Map over the contacts array and render a ContactListItem component for each contact */}
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
