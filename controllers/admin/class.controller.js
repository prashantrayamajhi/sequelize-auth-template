const { Class } = require("./../../models/index");
const { capitalize } = require("./../../helper/text");

exports.getClasses = async (req, res) => {
  try {
    const data = await Class.findAll();
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Class.findByPk(id);
    if (!data) return res.status(404).send({ err: "Class not found" });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.postClass = async (req, res) => {
  try {
    let { name } = req.body;
    name = capitalize(name);
    if (!name.trim()) {
      return res.status(401).send({ err: "Class name is required" });
    }
    const classExists = await Class.findOne({ name });
    if (classExists) {
      return res.status(409).send({ err: "Class already exists" });
    } else {
      const savedClass = await Class.create({ name });
      const data = await savedClass.save();
      return res.status(201).json({ data });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.updateClassById = async (req, res) => {
  const { id } = req.params;
  let { name } = req.body;
  name = capitalize(name);
  try {
    const classExists = await Class.findByPk(id);
    if (!classExists) {
      return res.status(404).send({ err: "Class not found" });
    } else {
      const updateClass = await category.update({ name });
      return res.status(200).json({ data: updateClass });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.deleteClassById = async (req, res) => {
  const { id } = req.params;
  try {
    const classExists = await Class.findByPk(id);
    if (!classExists) {
      return res.status(404).send({ err: "Class not found" });
    } else {
      await classExists.destroy();
      return res.status(200).send({ data: "Class deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
