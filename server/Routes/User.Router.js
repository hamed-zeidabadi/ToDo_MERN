const router = require("express").Router();
const User = require("../Controller/User_Controller");

module.exports = router.get("/users/login/", (req, res) => {
  res.send("ok");
});
