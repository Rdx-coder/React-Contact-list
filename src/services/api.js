const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch contacts from the API
export const fetchContacts = async () => {
  try {
    const response = await fetch(BASE_URL); // Send a GET request to the BASE_URL
    const data = await response.json(); // Parse the response JSON
    return data; // Return the data
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

// Function to add a contact to the API
export const addContact = async (contact) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST', // Send a POST request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact), // Convert the contact object to JSON string
    });
    const data = await response.json(); // Parse the response JSON
    return data; // Return the data
  } catch (error) {
    console.error('Error adding contact:', error);
    throw error;
  }
};

// Function to update a contact in the API
export const updateContact = async (contact) => {
  try {
    const url = `${BASE_URL}/${contact.id}`; // Construct the URL for the specific contact
    const response = await fetch(url, {
      method: 'PUT', // Send a PUT request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact), // Convert the contact object to JSON string
    });
    const data = await response.json(); // Parse the response JSON
    return data; // Return the data
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};

// Function to delete a contact from the API
export const deleteContact = async (contactId) => {
  try {
    const url = `${BASE_URL}/${contactId}`; // Construct the URL for the specific contact
    const response = await fetch(url, {
      method: 'DELETE', // Send a DELETE request
    });
    const data = await response.json(); // Parse the response JSON
    return data; // Return the data
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};
