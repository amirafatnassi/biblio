const express = require("express");
const passport = require("passport");
const {
  getLivres,
  getLivre,
  addLivre,
  updateLivre,
  deleteLivre,
} = require("../controllers/livreController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.get("/", getLivres);
router.get("/show/:id", getLivre);
router.post(
  "/add",
  [
    passport.authenticate("bearer", { session: false }),
    upload.single("contenu"),
  ],
  addLivre
);
router.put(
  "/update/:id",
  [
    passport.authenticate("bearer", { session: false }),
    upload.single("contenu"),
  ],
  updateLivre
);

router.delete(
  "/delete/:id",
  passport.authenticate("bearer", { session: false }),
  deleteLivre
);

module.exports = router;
