const User = require("./../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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
      username: user.username,
      address: user.address,
    };
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
