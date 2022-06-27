const { DataTypes } = require("sequelize");

const sequelize = require("./../db/db");

const Docs = sequelize.define("docs", {
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
  subject: {
    type: DataTypes.INTEGER,
    references: {
      model: "subject",
    },
  },
  file: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Docs;
