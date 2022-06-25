// import important parts of sequelize library
const { DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("./../db/db");

const Schools = sequelize.define("school", {
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
  // define stock column
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  public_key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Schools;
