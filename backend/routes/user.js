const express = require("express");
const passport = require("passport");
const {
  register,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  download,
} = require("../controllers/userController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", passport.authenticate("bearer", { session: false }), getUsers);
router.get(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  getUser
);
router.put(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  updateUser
);
router.delete(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  deleteUser
);

module.exports = router;
