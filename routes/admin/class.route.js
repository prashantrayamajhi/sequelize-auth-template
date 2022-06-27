const router = require("express").Router();
const controller = require("../../controllers/admin/class.controller");

router.get("/", controller.getClasses);

router.get("/:id", controller.getClassById);

router.post("/", controller.postClass);

router.delete("/:id", controller.deleteClassById);

module.exports = router;
