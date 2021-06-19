const { Sequelize } = require("sequelize");

module.exports = sequelize = new Sequelize("social", "postgres", "root", {
  dialect: "postgres",
  host: "localhost",
});
