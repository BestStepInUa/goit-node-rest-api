import authServices from '../services/authServices.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';
import HttpError from '../helpers/HttpError.js';

const singup = async (req, res, next) => {
  const { email } = req.body;
  const user = await authServices.findUser({ email });
  if (user) throw HttpError(409, 'Email in use');
  const newUser = await authServices.singup(req.body);
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

export default {
  singup: ctrlWrapper(singup),
};
