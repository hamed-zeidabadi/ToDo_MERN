const User = require("../Models/User_Model");
const bcrypt = require("bcryptjs");
exports.register = async (req, res, next) => {
  try {
    //get requsest data
    const { username, password } = await req.body;
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPaswword = await bcrypt.hash(password, salt);
    //craete new user
    const createUser = await new User({
      username,
      password: hashPaswword,
    });

    await createUser.save();
    res.status(200).send("ok");
    next();
  } catch (error) {
    console.log(error);
  }
};
