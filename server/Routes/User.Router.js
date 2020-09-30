const express = require("express");
const Router = express.Router();
const User = require("../Controller/User_Controller");

Router.get("register", User.register);
