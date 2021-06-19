const router = require("express").Router();
const controller = require("./../controllers/auth.controller");

router.post("/login", controller.login);

router.post("/signup", controller.signup);

router.post("/verify", controller.verify);

router.post("/resend", controller.resend);

module.exports = router;
