const User = require("../Models/User_Model");
exports.register = async (req, res, next) => {
  try {
    await res.status(200).json({
      status: "succsess",
    });
    next();
  } catch (error) {
    console.log(error);
  }
};
