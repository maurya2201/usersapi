const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  hobby: {
    type: String,
    required: true,
  }
}, {
  versionKey: false
});

module.exports = mongoose.model("Users", usersSchema);
