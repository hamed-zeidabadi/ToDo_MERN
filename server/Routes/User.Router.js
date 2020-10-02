const router = require("express").Router();
const User = require("../Controller/User_Controller");

module.exports = router.get("/users", (req, res) => {
  res.status(200).send("OKKKKKK");
});
