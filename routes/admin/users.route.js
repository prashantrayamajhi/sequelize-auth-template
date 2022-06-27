const router = require("express").Router();
const controller = require("../../controllers/admin/users.controller");

router.post("/signup", controller.createStudent);

module.exports = router;
