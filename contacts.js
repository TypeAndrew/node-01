const fs = require('fs').promises;
const { randomUUID } = require('crypto');
const { appendFile } = require('fs');
const path = require('path');
//const logger = require('./module');
//const path = './db/contacts.json';
const contactsPath = path.dirname('./db/contacts.json') + '/' + path.basename('./db/contacts.json');

async function saveFile(file) {
    return await fs.writeFile(contactsPath, JSON.stringify(file))
        .then(undefined)
        .catch(err => console.log(err.message));

}


 async function listContacts() {
   
     return  await fs.readFile(contactsPath)
        .then(data => JSON.parse(data.toString()))
        .catch(err => console.log(err.message));
   
}

  async function getContactById(contactId) {
    
      const file = await listContacts();
      console.log(file);
    
      return file.filter(el => el.id == contactId);

}

async function removeContact(contactId) {
    
    const file = await listContacts();
    await saveFile(file.filter(el => el.id != contactId));
    
    return await listContacts();
}

async function addContact(name, email, phone) {
    
      const file = listContacts();
    console.log(file);
         
    //const newFile = [...file, { id: '11', name: name, email: email, phone: phone }];
    
    //await fs.appendFile(contactsPath,JSON.stringify(newFile));


}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};