// server/models/User.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures that the email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the User model to be used in routes
module.exports = mongoose.model('User', userSchema);

