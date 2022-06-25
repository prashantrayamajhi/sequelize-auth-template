const { DataTypes } = require("sequelize");

const sequelize = require("./../db/db");

const Videos = sequelize.define("video", {
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
});

module.exports = Videos;
