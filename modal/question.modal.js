const mongoose = require("mongoose");

const questionModal = new mongoose.Schema({
  questionType: { type: String, required: true },
  answer: { type: String, required: true, unique: true },
});

const Question = mongoose.model("question", questionModal);
module.exports = Question;
