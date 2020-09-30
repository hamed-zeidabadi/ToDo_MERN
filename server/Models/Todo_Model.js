const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo_Schema = Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  todo: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const TODO = mongoose.model("ToDo", Todo_Schema);
module.exports = TODO;
