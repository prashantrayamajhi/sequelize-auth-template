const { DataTypes } = require("sequelize");
const sequelize = require("./../db/db");

const User = sequelize.define("tokens", {
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = User;
