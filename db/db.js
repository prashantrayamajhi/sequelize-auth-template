const { Sequelize } = require("sequelize");

module.exports = sequelize = new Sequelize("toy-store", "postgres", "root", {
  dialect: "mysql",
  host: "localhost",
});
