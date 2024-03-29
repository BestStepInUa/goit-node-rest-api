import authServices from '../services/authServices.js';
// import ctrlWrapper from '../decorators/ctrlWrapper.js';
// import HttpError from '../helpers/HttpError.js';

const singup = async (req, res) => {
  const newUser = await authServices.singup(req.body);
  res.status(201).json({
    email: newUser.email,
  });
};

export default {
  singup,
};
