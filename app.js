const express = require("express");
const cors = require("cors");
const sequelize = require("./db/db");
const app = express();
const passport = require("passport");
require("./security/passport")(passport);

// routes  origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route middlewares
app.use("/api/v1/auth", AuthRoute);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => console.log(err));

module.exports = app;
