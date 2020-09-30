const User = require("../Models/User_Model");
exports.register = async (req, res, next) => {
  res.status(200).json({
    status: "succsess",
  });
};
