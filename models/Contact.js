import { Schema, model } from 'mongoose';
import { PHONE_REXEP, EMAIL_REXEP } from '../constants/contactsConstants.js';

const contactSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
    match: EMAIL_REXEP,
    required: [true, 'Set email for contact'],
  },
  phone: {
    type: String,
    match: PHONE_REXEP,
    required: [true, 'Set phone for contact'],
  },
  favorite: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Contact = model('contact', contactSchema);

export default Contact;
