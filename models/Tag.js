const { DataTypes } = require("sequelize");

const sequelize = require("./../db/db");

const Tag = sequelize.define("tag", {
  // define an id column
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // define tag_name column
  tag_name: {
    type: DataTypes.STRING,
  },
});

module.exports = Tag;
