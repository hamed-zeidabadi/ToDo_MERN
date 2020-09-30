const mongoose = require("mongoose");
const Todo_Schema = mongoose.Schema({
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
