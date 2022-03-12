const User = require("./../models/User");
const Token = require("./../models/Token");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendMail = require("./../utils/nodemailer");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ where: { email } });
    if (userExists)
      return res.status(400).send({ err: "Email already registered" });
    const user = await User.create({
      name,
      email,
      password,
    });

    const token = await sendMail(user.email, 4);

    const savedToken = await Token.create({
      token,
      userId: user.id,
    });

    await savedToken.save();

    const data = await user.save();
    return res.status(201).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).send({ err: "Invalid credentials" });
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).send({ err: "Invalid credentials" });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "168h",
    });
    const data = {
      token,
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
    };
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.verify = async (req, res) => {
  const { id, email, token } = req.body;
  try {
    const user = await Token.findOne({ where: { email } });
    if (!user)
      return res
        .status(400)
        .send({ err: "No email found, please signup first" });
    if (user.id === id && user.token === token) {
      return res.status(200).send({ msg: "Account verified" });
    } else {
      return res.status(400).send({ err: "Invalid token" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.resend = async (req, res) => {
  const { email, id } = req.body;
  try {
    const emailExists = await User.findOne({ where: { email } });
    if (!emailExists)
      return res.status(400).send({ err: "Email not registered" });

    const token = await sendMail(user.email, 4);

    const savedToken = await Token.create({
      token,
      userId: id,
    });

    await savedToken.save();

    return res
      .status(200)
      .send({ msg: "Token sent successfully, please check you mail" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
