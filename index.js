const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const userController = require("./routes/user.controller");
app.use("/api/user", userController);

module.exports = app;
