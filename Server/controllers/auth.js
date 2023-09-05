const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const phone = req.body.phone;
    const address = req.body.address;
    const isA = req.body.isA;
    const isB = req.body.isB;
    const isC = req.body.isC;
    const isS = req.body.isS;
    bcrypt
      .hash(password, 12)
      .then((hashedPw) => {
        const user = User.create({
          name,
          email,
          phone,
          address,
          password: hashedPw,
          isA,
          isB,
          isC,
          isS,
        });
        // return user.createCart();
        return user;
      })
      .then((user) => {
        user.createCart();
        res.status(201).json({ message: "User created!", userId: user.id });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  };