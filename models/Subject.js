const { DataTypes } = require("sequelize");

const sequelize = require("./../db/db");

const Subject = sequelize.define("subject", {
  // define an id column
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // define name column
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "class",
    },
  },
});

module.exports = Subject;
