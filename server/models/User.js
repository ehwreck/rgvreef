const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  roles: [
    {
      type: String,
      default: 'employee',
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
  archived: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('User', userSchema);
