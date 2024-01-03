const express = require("express");
const { body } = require("express-validator");

const User = require("../models/user.js");

const authController = require("../controllers/auth");

const router = express.Router();

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ where: { email: value } }).then((userEmail) => {
          if (userEmail) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 6 }),
    body("name").trim().not().isEmpty(),
    body("phone").trim().not().isEmpty(),
    body("address").trim().not().isEmpty(),
  ],
  authController.signup
);

router.post("/login", authController.login);

module.exports = router;