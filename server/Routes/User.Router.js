const router = require("express").Router();
const User = require("../Controller/User_Controller");

module.exports = router
  .post("/register", User.register)
  .post("/login", User.login);
