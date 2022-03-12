const { DataTypes } = require("sequelize");

const sequelize = require("./../db/db");

const SubCategory = sequelize.define("sub_category", {
  // define an id column
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // define category_name column
  sub_category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "category",
      key: "id",
    },
  },
});

module.exports = SubCategory;
