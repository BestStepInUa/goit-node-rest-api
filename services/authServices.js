import User from '../models/User.js';

const singup = data => User.create(data);

export default {
  singup,
};
