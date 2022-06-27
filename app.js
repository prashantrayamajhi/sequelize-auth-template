const express = require("express");
const cors = require("cors");
const sequelize = require("./db/db");
const app = express();
const passport = require("passport");
require("./security/passport")(passport);

// routes  origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// user routes
const AuthRoute = require("./routes/auth.route");

// admin routes
const AdminUserRoute = require("./routes/admin/users.route");
const AdminSchoolRoute = require("./routes/admin/school.route");
const AdminSubjectRoute = require("./routes/admin/subject.route");
const AdminClassRoute = require("./routes/admin/class.route");

// users route middlewares
app.use("/api/v1/auth", AuthRoute);

// admin route middlewares
app.use("/api/v1/admin/users", AdminUserRoute);
app.use("/api/v1/admin/schools", AdminSchoolRoute);
app.use("/api/v1/admin/subject", AdminSubjectRoute);
app.use("/api/v1/admin/classes", AdminClassRoute);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => console.log(err));

module.exports = app;
