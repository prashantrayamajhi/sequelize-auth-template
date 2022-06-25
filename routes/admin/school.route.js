const router = require("express").Router();
const controller = require("../../controllers/admin/school.controller");

router.get("/", controller.getSchools);

router.get("/:id", controller.getSchoolById);

router.post("/", controller.postSchool);

router.delete("/:id", controller.deleteSchoolById);

module.exports = router;
