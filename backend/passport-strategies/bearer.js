const passport = require("passport");
const BearerStrategy = require("passport-http-bearer");
const jwt = require("jsonwebtoken");
const User=require('../models/user');

passport.use(
  new BearerStrategy(function (token, done) {
    const decoded = jwt.verify(token, process.env.JWTKEY);
    User.findById(decoded.userId, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      return done(null, user, { scope: "all" });
    });
  })
);
