const fs = require('fs').promises;
const path = require('path');
//const path = './db/contacts.json';
const contactsPath = path.dirname('./db/contacts.json') + '/' + path.basename('./db/contacts.json');   


function listContacts() {
  // ...твій код
    fs.readFile(contactsPath)
  .then(data => console.log(data.toString()))
    .catch(err => console.log(err.message));
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
    listContacts,
  getContactById,
    removeContact,
  addContact
};