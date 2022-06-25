// import important parts of sequelize library
const { DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("./../db/db");

const Class = sequelize.define("class", {
  // define an id column
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  // define school name column
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Class;
