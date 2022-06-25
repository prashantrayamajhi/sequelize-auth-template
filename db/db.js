const { Sequelize } = require("sequelize");

module.exports = sequelize = new Sequelize("library", "postgres", "root", {
  dialect: "postgres",
  host: "localhost",
});
