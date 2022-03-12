const { DataTypes } = require("sequelize");

const sequelize = require("./../db/db");

const Category = sequelize.define("category", {
  // define an id column
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // define category_name column
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
