const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
    min: 14,
    max: 70,
    required:true
  },
  gender: {
    type: String,
  },
  emailID: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  photo: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
