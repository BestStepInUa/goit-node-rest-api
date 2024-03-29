import express from 'express';
import authControllers from '../controllers/authControllers.js';
import { userSingupSchema } from '../schemas/usersSchemas.js';
import validateBody from '../decorators/validateBody.js';

const authRouter = express.Router();

authRouter.post('/singup', validateBody(userSingupSchema), authControllers.singup);

export default authRouter;
