import express from 'express';
import contactsControllers from '../controllers/contactsControllers.js';

const contactsRouter = express.Router();

contactsRouter.get('/', contactsControllers.getAll);

contactsRouter.get('/:id', contactsControllers.getById);

contactsRouter.post('/', contactsControllers.addContact);

contactsRouter.put('/:id', contactsControllers.updateContact);

contactsRouter.delete('/:id', contactsControllers.deleteContact);

export default contactsRouter;
