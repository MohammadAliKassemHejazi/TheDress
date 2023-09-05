const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const authRoutes = require("./Routes/auth.js");


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


app.use("/auth", authRoutes);
// app.use("/admin", adminRoutes);
// app.use("/shop", shopRoutes);


app.listen(4000);