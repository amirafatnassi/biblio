const express = require("express");
const passport = require("passport");
const {
  getCategories,
  getCategorie,
  addCategorie,
  updateCategorie,
  deleteCategorie,
} = require("../controllers/categorieController");
const router = express.Router();

router.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  getCategories
);
router.get(
  "/show/:id",
  passport.authenticate("bearer", { session: false }),
  getCategorie
);
router.post(
  "/add",
  passport.authenticate("bearer", { session: false }),
  addCategorie
);
router.put(
  "/update/:id",
  passport.authenticate("bearer", { session: false }),
  updateCategorie
);
router.delete(
  "/delete/:id",
  passport.authenticate("bearer", { session: false }),
  deleteCategorie
);

module.exports = router;
