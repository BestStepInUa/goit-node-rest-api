import contactsService from '../services/contactsServices.js';

import HttpError from '../helpers/HttpError.js';

import { addContactSchema, updateContactSchema } from '../schemas/contactsSchemas.js';

const getAll = async (req, res, next) => {
  try {
    const result = await contactsService.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
    // res.status(500).json({ message: 'Server error' });
  }
};

const getById = async (req, res, next) => {
  try {
    // console.log(req.params);
    const { id } = req.params;
    const result = await contactsService.getContactById(id);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);

      // OR
      // const error = new Error(`Contact with id=${id} not found`);
      // error.status = 404;
      // throw error;

      // OR
      // return res.status(404).json({
      //   message: `Contact with id=${id} not found`,
      // });
    }
    res.json(result);
  } catch (error) {
    next(error);

    // OR
    // const { status = 500, message = 'Server error' } = error;
    // res.status(status).json({ message });
  }
};

const addContact = async (req, res, next) => {
  try {
    // console.log(req.body);
    // const validateResult = addContactSchema.validate(req.body);
    // console.log(validateResult);
    const { error } = addContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { name, email, phone } = req.body;
    const result = await contactsService.addContact(name, email, phone);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateContact = async (req, res, next) => {
  try {
    const { error } = updateContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }
    const { id } = req.params;
    const result = await contactsService.updateContactById(id, req.body);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contactsService.removeContactById(id);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default { getAll, getById, deleteContact, addContact, updateContact };
