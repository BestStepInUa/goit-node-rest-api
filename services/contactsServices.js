import fs from 'fs/promises';
import path from 'path';
import { nanoid } from 'nanoid';

const contactsPath = path.resolve('db', 'contacts.json');

const updateContacts = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// async function listContacts() {
//   const data = await fs.readFile(contactsPath);
//   return JSON.parse(data);
// }

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// async function getContactById(contactId) {
//   const contacts = await listContacts();
//   const data = contacts.find(contact => contact.id === contactId);
//   return data || null;
// }

const getContactById = async id => {
  const contacts = await listContacts();
  const data = contacts.find(contact => contact.id === id);
  return data || null;
};

// async function addContact(name, email, phone) {
//   const contacts = await listContacts();
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await updateContacts(contacts);
//   return newContact;
// }

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

// async function removeContact(contactId) {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex(contact => contact.id === contactId);
//   if (idx === -1) return null;
//   const [data] = contacts.splice(idx, 1);
//   await updateContacts(contacts);
//   return data;
// }

const removeContactById = async id => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(contact => contact.id === id);
  if (idx === -1) return null;
  const [data] = contacts.splice(idx, 1);
  await updateContacts(contacts);
  return data;
};

// async function updateContactById(contactId, data) {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex(contact => contact.id === contactId);
//   if (idx === -1) return null;
//   contacts[idx] = { ...contacts[idx], ...data };
//   return contacts[idx];
// }

const updateContactById = async (id, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex(contact => contact.id === id);
  if (idx === -1) return null;
  contacts[idx] = { ...contacts[idx], ...data };
  return contacts[idx];
};

export default { listContacts, getContactById, addContact, removeContactById, updateContactById };
