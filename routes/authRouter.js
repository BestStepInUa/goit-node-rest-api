import express from 'express';
import authControllers from '../controllers/authControllers.js';
import { userSingupSinginSchema } from '../schemas/usersSchemas.js';
import validateBody from '../decorators/validateBody.js';

const authRouter = express.Router();

authRouter.post('/singup', validateBody(userSingupSinginSchema), authControllers.singup);
authRouter.post('/singin', validateBody(userSingupSinginSchema), authControllers.singin);

export default authRouter;
