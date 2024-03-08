//import { Schema, model } from "@nestjs/mongoose";
import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// export interface User extends mongoose.Document {
//   email: string;
//   password: string;
// }

UserSchema.index({ email: 1 }, { unique: true });

export const UserModel = mongoose.model('User', UserSchema);
