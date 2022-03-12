const SubCategory = require("./../../models/SubCategories");
const Category = require("./../../models/Category");
const { capitalize } = require("./../helpers/text");

exports.getSubCategories = async (req, res) => {
  try {
    const data = await SubCategory.findAll();
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getSubCategoryByCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).send({ err: "Category not found" });
    const data = await SubCategory.findAll({
      where: {
        category: id,
      },
    });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.getSubCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await SubCategory.findByPk(id);
    if (!data) return res.status(404).send({ err: "SubCategory not found" });
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.postSubCategory = async (req, res) => {
  try {
    let { name, category } = req.body;
    name = capitalize(name);
    if (!name.trim()) {
      return res.status(401).send({ err: "SubCategory name is required" });
    }
    const sub_category_exists = await sub_category_exists.findOne({
      sub_category_name: name,
      category: category,
    });
    if (sub_category_exists) {
      return res.status(409).send({ err: "SubCategory already exists" });
    } else {
      const sub_category = await SubCategory.create({
        sub_category_name: name,
        category,
      });
      const data = await sub_category.save();
      return res.status(201).json({ data });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.updateSubCategoryById = async (req, res) => {
  const { id } = req.params;
  let { name, category } = req.body;
  name = capitalize(name);
  try {
    const sub_category_exists = await SubCategory.findByPk(id);
    if (!sub_category_exists) {
      return res.status(404).send({ err: "Sub Category not found" });
    } else {
      const updatedSubCategory = await SubCategory.update({
        sub_category_name: name,
        category,
      });
      return res.status(200).json({ data: updatedSubCategory });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};

exports.deleteSubCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const sub_category_exists = await SubCategory.findByPk(id);
    if (!sub_category_exists) {
      return res.status(404).send({ err: "SubCategory not found" });
    } else {
      await sub_category_exists.destroy();
      return res.status(200).send({ data: "SubCategory deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err });
  }
};
