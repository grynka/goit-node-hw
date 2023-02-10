const fs = require("fs/promises");
const path = require("path");
const contactPatch = path.resolve("./db/contacts.json");

function listContacts() {
  console.log(contactPatch);
  fs.readFile(contactPatch)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  console.log("get id " + contactId);
  fs.readFile(contactPatch)
    .then((data) => JSON.parse(data))
    .then((contacts) => {
      console.log(contacts.filter((item) => item.id.includes(contactId)));
    })
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  console.log("del id " + contactId);
  fs.readFile(contactPatch)
    .then((data) => JSON.parse(data))
    .then((contacts) => {
      contacts.push(contacts.filter((contact) => contact.id != contactId))
      fs.writeFile(contactPatch, JSON.stringify(contacts))
      .then(() => {
        console.log("Append Success");
      })
      .catch((err) => {
        console.log("Append Failed: " + err);
      });      
    })
    .catch((err) => console.log(err.message));
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
    .catch((err) => {
      console.log("Read Error: " + err);
    });
  return;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
