const fs = require('fs').promises;
const path = require('path');
//const logger = require('./module');
//const path = './db/contacts.json';
const contactsPath = path.dirname('./db/contacts.json') + '/' + path.basename('./db/contacts.json');


async function listContacts() {
   
     return await fs.readFile(contactsPath)
        .then(data => JSON.parse(data.toString()))
        .catch(err => console.log(err.message));
   
}

  async function getContactById(contactId) {
    
      const filex1 = await listContacts();
      console.log(filex1);
    return filex1.filter(el => el.id == contactId);

}

function removeContact(contactId) {
    // ...твій код
}

function addContact(name, email, phone) {
    // ...твій кодy
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};