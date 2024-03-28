import express from 'express';
import contactsControllers from '../controllers/contactsControllers.js';
import { addContactSchema, updateContactSchema } from '../schemas/contactsSchemas.js';
import validateBody from '../decorators/validateBody.js';
import isValidId from '../middlewares/isValidId.js';

const contactsRouter = express.Router();

contactsRouter.get('/', contactsControllers.getAll);
contactsRouter.post('/', validateBody(addContactSchema), contactsControllers.addContact);
contactsRouter.get('/:id', isValidId, contactsControllers.getById);
contactsRouter.put('/:id', isValidId, validateBody(updateContactSchema), contactsControllers.updateContact);
contactsRouter.delete('/:id', isValidId, contactsControllers.deleteContact);
contactsRouter.patch(
  '/:id/favorite',
  isValidId,
  validateBody(updateContactSchema),
  contactsControllers.updateContactStatus
);

export default contactsRouter;
