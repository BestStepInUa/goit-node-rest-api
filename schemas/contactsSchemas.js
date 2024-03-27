import Joi from 'joi';
// import { PHONE_REXEP, EMAIL_REXEP } from '../constants/contactsConstants.js';

export const addContactSchema = Joi.object({
  name: Joi.string().required(),
  // email: Joi.string().pattern(EMAIL_REXEP).required(),
  // phone: Joi.string().pattern(PHONE_REXEP).required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  // email: Joi.string().pattern(EMAIL_REXEP),
  // phone: Joi.string().pattern(PHONE_REXEP),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
})
  .min(1)
  .message('Body must have at least one field');
