const express = require("express");
const router = express.Router();
const User = require("../Controller/User_Controller");

router.get("/register", User.register);

module.exports = router;
