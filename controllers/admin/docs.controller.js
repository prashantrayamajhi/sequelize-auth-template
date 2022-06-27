const { Docs } = require("./../../models/index");
const { capitalize } = require("./../helpers/text");

exports.getDocs = async (req, res) => {
  try {
    const data = await Docs.findAll();
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getDocsById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Docs.findByPk(id);
    if (!data) return res.status(404).send({ err: "Document not found" });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.postDocs = async (req, res) => {
  try {
    let { name, subject } = req.body;
    name = capitalize(name);
    if (!name.trim()) {
      return res.status(401).send({ err: "School name is required" });
    }
    if (!subject) return res.status(200).send({ err: "Subject is required" });
    const docExists = await Docs.findOne({ name });
    if (docExists) {
      return res.status(409).send({ err: "Documents already exists" });
    } else {
      const docs = await Docs.create({ name });
      const data = await docs.save();
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

exports.deleteDocsById = async (req, res) => {
  const { id } = req.params;
  try {
    const docs = await Docs.findByPk(id);
    if (!docs) {
      return res.status(404).send({ err: "Document not found" });
    } else {
      await docs.destroy();
      return res.status(200).send({ data: "Document deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
