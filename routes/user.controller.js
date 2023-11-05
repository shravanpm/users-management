const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const User = require("../modal/user.modal");

router.post("/register", async (req, res) => {
  try {
    const checkUserEmail = await User.find({ email: req.body.email }).exec();
    const checkUserPhone = await User.find({ phone: req.body.phone }).exec();
    if (checkUserEmail.length || checkUserPhone.length) {
      return res.send({ message: "email or mobile number is already in use" });
    }
    if (req.body.phone.toString().length !== 10) {
      return res.send({ message: "Enter valid mobile number", status: false });
    }

    const newUser = await User.create(req.body);
    res.status(200).send({ newUser, status: true });
  } catch (error) {
    res.status(400).send({ message: "missing details", status: false });
  }
});
router.get("/", async (req, res) => {
  try {
    const query = req.query;
    console.log(query);
    if (query.name) {
      const users = await User.find({ name: query.name });
      res.status(200).send({ users, status: true });
    } else {
      const users = await User.find({}).exec();
      // console.log(users);
      res.status(200).send({ users, status: true });
    }
  } catch (error) {
    res.send({ message: "couldn't find data", status: false });
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log("hello", req.body.email);
    const user = await User.findOne({ email: req.body.email }).exec();
    console.log(user);
    if (user.password === req.body.password) {
      res.status(200).send({ user, status: true });
    }
  } catch (error) {
    res.send({ message: "credentials doesn't match", status: false });
  }
});

module.exports = router;
