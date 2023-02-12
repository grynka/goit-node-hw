const fs = require("fs/promises");
const path = require("path");
const contactPatch = path.resolve("./db/contacts.json");

function listContacts() {
  fs.readFile(contactPatch)
    .then((data) => console.log(JSON.parse(data)))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactPatch)
    .then((data) => {
    let contacts = JSON.parse(data)
    console.log(contacts.filter((item) => item.id.includes(contactId)));})
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  fs.readFile(contactPatch)
    .then((data) => {
      let contacts = JSON.parse(data);
      let newContacts = contacts.filter((contact) => contact.id != contactId);
      console.log(newContacts);
      fs.writeFile(contactPatch, JSON.stringify(newContacts))
    })
    .catch (error => console.error(error.message)); 
}

function addContact(name, email, phone) {
  fs.readFile(contactPatch)
    .then((data) => {
      let json = JSON.parse(data);
      json.push({
        id: json.length + 1,
        name: name,
        email: email,
        phone: phone,
      });

      fs.writeFile(contactPatch, JSON.stringify(json))
        .then(() => {
          console.log("Append Success");
        })
        .catch((err) => {
          console.log("Append Failed: " + err);
        });
    })
    .catch (error => console.error(error.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
