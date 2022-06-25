const router = require("express").Router();
const controller = require("../../controllers/auth.controller");

router.post("/signup", controller.createStudent);

module.exports = router;
