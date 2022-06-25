const School = require("./../../models/School");
const { capitalize } = require("./../helpers/text");

exports.getSchools = async (req, res) => {
  try {
    const data = await School.findAll();
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getSchoolById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await School.findByPk(id);
    if (!data) return res.status(404).send({ err: "School not found" });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.postSchool = async (req, res) => {
  try {
    let { name } = req.body;
    name = capitalize(name);
    if (!name.trim()) {
      return res.status(401).send({ err: "School name is required" });
    }
    const school = await School.findOne({ name });
    if (school) {
      return res.status(409).send({ err: "School already exists" });
    } else {
      const category = await School.create({ name });
      const data = await category.save();
      return res.status(201).json({ data });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

// exports.updateCategoryById = async (req, res) => {
//   const { id } = req.params;
//   let { name } = req.body;
//   name = capitalize(name);
//   try {
//     const category = await Category.findByPk(id);
//     if (!category) {
//       return res.status(404).send({ err: "Category not found" });
//     } else {
//       const updatedCategory = await category.update({ category_name: name });
//       return res.status(200).json({ data: updatedCategory });
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(500).send({ err });
//   }
// };

exports.deleteSchoolById = async (req, res) => {
  const { id } = req.params;
  try {
    const school = await School.findByPk(id);
    if (!school) {
      return res.status(404).send({ err: "School not found" });
    } else {
      await school.destroy();
      return res.status(200).send({ data: "School deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
