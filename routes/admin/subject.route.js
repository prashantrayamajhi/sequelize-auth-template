const router = require("express").Router();
const controller = require("../../controllers/admin/subject.controller");

router.get("/", controller.getSubjects);

router.get("/:id", controller.getSubjectById);

router.get("/class/:id", controller.getSubjectsByClassId);

router.post("/", controller.postSubject);

router.patch("/:id", controller.updateSubjectById);

router.delete("/:id", controller.deleteSubjectById);

module.exports = router;
