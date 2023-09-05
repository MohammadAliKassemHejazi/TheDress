
// const express = require("express");
// const adminController = require("../controllers/admin");
// const { body, query } = require("express-validator");
// const Cta = require("../models/cta");
// const Product = require("../models/product");
// const isAuth = require("../middleware/is-auth");
// const addUser = require("../middleware/add-user");


// /admin/add-product => post
// router.post(
//     "/add-product",
//     [
//       body("title").trim().not().isEmpty(),
//       body("price").trim().not().isEmpty(),
//       body("cost").trim().not().isEmpty(),
//       body("quantity").trim().not().isEmpty(),
//       body("ctumId").trim().not().isEmpty(),
//       body("title").custom((value, { req }) => {
//         return Product.findOne({ where: { title: value } }).then((ctaName) => {
//           if (ctaName) {
//             return Promise.reject("This product  already exists!");
//           }
//         });
//       }),
//     ],
//     isAuth,
//     addUser,
//     adminController.postAddProduct
//   );