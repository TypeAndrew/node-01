const fs = require('fs').promises;
const { randomUUID, constants } = require('crypto');
const colors = require('colors');
const path = require('path');

//const contactsPath = path.dirname('./db/contacts_data.json') + '/' + path.basename('./db/contacts_data.json');
const contactsPath = path.join('db','contacts_data.json');
/**
 * Write results change data arrey in the json file.
 * @param {string} data - data from file list objects
 * @returns {undefined<void>} - nothing return;
 */
async function saveFile(data) {
    return await fs.writeFile(contactsPath, JSON.stringify(data))
        .then(undefined)
        .catch(err => console.log(err.message));

}

/**
 * Read list data from json file.
 * @returns {string} - lisat data from file in object view
 */
 async function listContacts() {
   
     return  await fs.readFile(contactsPath)
        .then(data => JSON.parse(data.toString()))
        .catch(err => console.log(err.message));
   
}

/**
 * find element fom arrey of reading data.
 * @param {string} contactId - id to find data
 * @returns {string|object} - return found element or message element not found;
 */
async function getContactById(contactId) {
    
      const data = await listContacts();
      const foundElement = await data.filter(el => el.id == contactId);
      if (  foundElement.length === 0) {
         return console.log(`Element with ${contactId}  not found`.magenta);
      } else {
          return foundElement;
      }    
      
}

/**
 * Remove element fom arrey of reading data and save to file.
 * @param {string} contactId - id to find data
 * @returns {string} - return message deleting element or empty string;
 */
async function removeContact(contactId) {
    const foundElement = await getContactById(contactId)
    if ( foundElement === undefined) {
        return '';
    }
    const data = await listContacts();
    await saveFile(data.filter(el => el.id != contactId));
    console.log(`Element with ${contactId} id was deleted`.red);
  
}

/**
 * Remove element fom arrey of reading data and save to file.
 * @param {string} name - nmme to create data
 * @param {string} email - email to create data
 * @param {string} phone - string to create data
 * @returns {void} - return nothing;
 */
async function addContact(name, email, phone) {
    
    const data = (await listContacts() ===undefined) ? [] : await listContacts();
    const newdata = await [...data, { id: randomUUID.apply(), name: name, email: email, phone: phone.toString() }];
    await saveFile( newdata);
    console.log(`Element with ${name} ${email} ${phone}id was added`.green);
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};