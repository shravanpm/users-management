const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const Question = require("../modal/question.modal");

router.post("/register", async (req, res) => {
  try {
  } catch (error) {}
});
router.get("/", async (req, res) => {
  try {
    const query = req.query;
  } catch (error) {
    res.send({ message: "couldn't find data", status: false });
  }
});

router.post("/find-question", async (req, res) => {
  try {
    const question = await User.findOne({
      questionType: req.body.questionType,
    }).exec();
  } catch (error) {
    res.send({ message: "Not able to find the answer", status: false });
  }
});

module.exports = router;
