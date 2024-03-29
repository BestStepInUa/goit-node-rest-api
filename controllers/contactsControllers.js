import contactsServices from '../services/contactsServices.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import HttpError from '../helpers/HttpError.js';

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await contactsServices.listContacts({ owner });
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.getContactById(id);
  if (!result) throw HttpError(404, `Not found`);
  res.json(result);
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await contactsServices.addContact({ ...req.body, owner });
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.updateContactById(id, req.body);
  if (!result) throw HttpError(404, `Not found`);
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.removeContactById(id);
  if (!result) throw HttpError(404, `Not found`);
  res.json(result);
};

const updateContactStatus = async (req, res) => {
  const { id } = req.params;
  const result = await contactsServices.updateContactStatusById(id, req.body);
  if (!result) throw HttpError(404, `Not found`);
  res.json(result);
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  deleteContact: ctrlWrapper(deleteContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateContactStatus: ctrlWrapper(updateContactStatus),
};
