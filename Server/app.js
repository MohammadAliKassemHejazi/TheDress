const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const authRoutes = require("./Routes/auth.js");
