import User from '../models/User.js';

const findUser = filter => User.findOne(filter);

const singup = data => User.create(data);

export default {
  findUser,
  singup,
};
