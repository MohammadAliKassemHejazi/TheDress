const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const authRoutes = require("./Routes/auth.js");

const mongoose = require("mongoose")
require("dotenv").config();

////////////parsing/////////////////

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true"); 
  next();
});

app.use(bodyParser.json());

//////////Routing////////


app.use("/auth", authRoutes);
// app.use("/admin", adminRoutes);
// app.use("/shop", shopRoutes);


///////////error handling //////////
app.use((error, req, res, next) => {
 
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});



mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT);
  
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
