import Contact from '../models/Contact.js';

const listContacts = async () => Contact.find();

// const getContactById = async id => {
//   const contacts = await listContacts();
//   const data = contacts.find(contact => contact.id === id);
//   return data || null;
// };

// const addContact = async (name, email, phone) => {
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
// };

// const removeContactById = async id => {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex(contact => contact.id === id);
//   if (idx === -1) return null;
//   const [data] = contacts.splice(idx, 1);
//   await updateContacts(contacts);
//   return data;
// };

// const updateContactById = async (id, data) => {
//   const contacts = await listContacts();
//   const idx = contacts.findIndex(contact => contact.id === id);
//   if (idx === -1) return null;
//   contacts[idx] = { ...contacts[idx], ...data };
//   await updateContacts(contacts);
//   return contacts[idx];
// };

// export default { listContacts, getContactById, addContact, removeContactById, updateContactById };
export default listContacts;
