import Contact from '../models/Contact.js';

const listContacts = (filter = {}) => Contact.find(filter, '-createdAt -updatedAt');

const addContact = data => Contact.create(data);

const getContactByFilter = filter => Contact.findOne(filter);

const updateContactByFilter = (filter, data) => Contact.findOneAndUpdate(filter, data);

const removeContactByFilter = filter => Contact.findOneAndDelete(filter);

const updateContactStatusByFilter = (filter, data) => Contact.findOneAndUpdate(filter, data);

export default {
  listContacts,
  addContact,
  getContactByFilter,
  updateContactByFilter,
  removeContactByFilter,
  updateContactStatusByFilter,
};
