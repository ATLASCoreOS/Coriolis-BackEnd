// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');  // Make sure you have bcrypt installed

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Master', 'Engineer', 'Mate', 'Deckhand', 'Operations Manager', 'QHSE Manager', 'Director', 'Purchasing Manager', 'Fleet Engineer', 'Accounts Manager'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash if password is modified
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);