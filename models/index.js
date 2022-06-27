// import models
const Class = require("./Class");
const Docs = require("./Docs");
const School = require("./School");
const Subject = require("./Subject");
const User = require("./User");
const Video = require("./Videos");

User.hasOne(School, {
  foreignKey: "school",
  as: "schoolId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Video.belongsTo(Class, {
  foreignKey: "class",
  as: "classId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Docs.belongsTo(Class, {
  foreignKey: "class",
  as: "classId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = {
  Class,
  Docs,
  School,
  Subject,
  User,
  Video,
};
