const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["multipleChoice", "trueFalse", "openEnded", "essay"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
  },
  answerOptions: {
    type: [String], // Only required for multiple choice questions
  },
  correctAnswer: {
    type: Number, // Or String for True/False
    required: true,
  },
  explanation: {
    type: String,
    trim: true,
  },
  points: {
    type: Number,
    default: 1,
  },
});

module.exports = {
  Question: mongoose.model("Question", questionSchema),
  questionSchema,
};
