import React, { useState } from 'react';

import './App.css';

import contactsData from "./contacts.json";

function App() {
  const initialContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(initialContacts);
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5));
  


  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert('No more contacts to add!');
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContacts((prevContacts) => [...prevContacts, randomContact]);
    
    setRemainingContacts((prevRemainingContacts) =>
      prevRemainingContacts.filter((contactsData, index) => index !== randomIndex)
    );
  };




  
  const sortByName = () => {
    const sortedByName = contacts.slice().sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedByName);
  };



  const sortByPopularity = () => {
    const sortedByPopularity = contacts.slice().sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedByPopularity);
  };

  const removeContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={addRandomContact} >Add Random Contact</button> <p></p>
      <button onClick={sortByPopularity} >Sort By Popularity</button> <p></p>
      <button onClick={sortByName} >Sort By Name</button> <p></p>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactsData, index) => (
            <tr key={index}>
              <td>
                <img src={contactsData.pictureUrl} alt={contactsData.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{contactsData.name}</td>
              <td>{contactsData.popularity}</td>
              <td>{contactsData.wonOscar ? '🏆' : ''}</td>
              <td>{contactsData.wonEmmy ? '🏆' : ''}</td>
              <td><button onClick={() => removeContact(contactsData.id)}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>

      

    </div>
  );
}


export default App;
