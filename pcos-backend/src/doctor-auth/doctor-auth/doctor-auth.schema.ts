import * as mongoose from 'mongoose';

const validateRegistrationNumber = (value: string) => {
  // Check if the value is exactly five digits
  return /^\d{5}$/.test(value);
};

export const DoctorAuthSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateRegistrationNumber,
      message: 'Registration number must be exactly five digits',
    },
  },
  // Add other fields as needed
});
