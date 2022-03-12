const { DataTypes } = require("sequelize");
const sequelize = require("./../db/db");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        user.password = bcrypt.hashSync(user.password, 12);
      },
    },
  }
);

module.exports = User;
