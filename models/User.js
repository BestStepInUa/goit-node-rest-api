import { Schema, model } from 'mongoose';
import { handleSaveError, setUpdateSetting } from './hooks.js';
import { passwordRegexp } from '../constants/userConstants.js';
import { emailRegexp } from '../constants/constants.js';

const userSchema = new Schema(
  {
    password: {
      type: String,
      match: passwordRegexp,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: [true, 'Email is required'],
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timeseries: true }
);

userSchema.pre('findOneAndUpdate', setUpdateSetting);

userSchema.post('save', handleSaveError);

userSchema.post('findOneAndUpdate', handleSaveError);

const User = model('user', userSchema);

export default User;
