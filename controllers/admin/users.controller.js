const User = require("./../../models/User");

exports.createStudent = async (req, res) => {
  const { name, username, email, school, password } = req.body;
  try {
    const emailExists = await User.findOne({ where: { email } });
    if (emailExists)
      return res.status(400).send({ err: "Email already registered" });

    const usernameExists = await User.findOne({ where: { email } });
    if (usernameExists) return res.status(400).send({ err: "Username exists" });
    const user = await User.create({
      name,
      username,
      email,
      password,
      school,
    });
    const data = await user.save();
    return res.status(201).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
