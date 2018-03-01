const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
});

// Model class
const ModelClass = mongoose.model('user', userSchema);

// Export
module.exports = ModelClass;