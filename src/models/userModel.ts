import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  phone: String,
  name: String,
});

const User = model('User', userSchema);

export default User;