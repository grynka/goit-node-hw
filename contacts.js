const fs = require("fs/promises");
const path = require("path")
const contactPatch = path.resolve('./db/contacts.json');

function listContacts() {
    console.log(contactPatch)
    fs.readFile(contactPatch)
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

  module.exports = listContacts;