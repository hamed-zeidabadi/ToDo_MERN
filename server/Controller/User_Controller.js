const User = require("../Models/User_Model");
const bcrypt = require("bcryptjs");
const Joi = require("joi");
exports.register = async (req, res, next) => {
  try {
    //get requsest data
    const { username, password } = await req.body;

    // data Validation
    const Schema = Joi.object({
      username: Joi.string().min(4).max(255).required(),
      password: Joi.string().min(6).max(255).required(),
    });
    const result = await Schema.validate({
      username,
      password,
    });
    if (result.error) return res.send(result.error.message);

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

exports.login = async (req, res, next) => {
  try {
    res.send("login user");
  } catch (error) {
    console.log(error);
  }
};
