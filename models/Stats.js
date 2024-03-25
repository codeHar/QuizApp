const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  correctQuestionAnswers: [
    {
      question: String,
      answer: String,
    },
  ],
  incorrectQuestionAnswers: [
    {
      question: String,
      answer: String,
    },
  ],
  collectionName: {
    type: String,
  },
  correctPoints: {
    type: Number,
    default: 0,
  },
  totalPoints: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Stats", statsSchema);
