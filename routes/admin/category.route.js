const router = require("express").Router();
const controller = require("./../../controllers/admin/category.controller");
const passport = require("passport");
const { isAdmin } = require("./../../middlewares/role");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  controller.getCategories
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  controller.getCategoryById
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  controller.postCategory
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  controller.updateCategoryById
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  isAdmin,
  controller.deleteCategoryById
);

module.exports = router;
