const Category = require("./../../models/Category");
const { capitalize } = require("./../helpers/text");

exports.getCategories = async (req, res) => {
  try {
    const data = await Category.findAll();
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Category.findByPk(id);
    if (!data) return res.status(404).send({ err: "Category not found" });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.postCategory = async (req, res) => {
  try {
    let { name } = req.body;
    name = capitalize(name);
    if (!name.trim()) {
      return res.status(401).send({ err: "Category name is required" });
    }
    const category = await Category.findOne({ category_name: name });
    if (category) {
      return res.status(409).send({ err: "Category already exists" });
    } else {
      const category = await Category.create({ name: category_name });
      const data = await category.save();
      return res.status(201).json({ data });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.updateCategoryById = async (req, res) => {
  const { id } = req.params;
  let { name } = req.body;
  name = capitalize(name);
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).send({ err: "Category not found" });
    } else {
      const updatedCategory = await category.update({ category_name: name });
      return res.status(200).json({ data: updatedCategory });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.deleteCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).send({ err: "Category not found" });
    } else {
      await category.destroy();
      return res.status(200).send({ data: "Category deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
