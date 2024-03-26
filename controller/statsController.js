const Stats = require("../models/Stats");
const catchError = require("../utils/CatchError");

const getAllStats = async (req, res) => {
  try {
    const { userId } = req.params;

    const stats = await Stats.find({
      user: userId,
    }).populate("collection");

    const statsData = stats.map((stat) => ({
      id: stat._id,
      correctPoints: stat.correctPoints,
      totalPoints: stat.totalPoints,
      collectionName: stat.collection.title,
    }));

    res.status(200).json({
      msg: "Successfully fetched all stats",
      stats: statsData,
    });
  } catch (err) {
    const error = catchError(err);
    res.status(400).json(error);
  }
};

const getStatsDetail = async (req, res) => {
  try {
    const { statsId } = req.params;

    const stat = await Stats.findById(statsId).populate("collection");

    const statsData = {
      id: stat._id,
      correctPoints: stat.correctPoints,
      totalPoints: stat.totalPoints,
      collectionName: stat.collection.title,
      correctQuestionAnswers: stat.correctQuestionAnswers,
      incorrectQuestionAnswers: stat.incorrectQuestionAnswers,
      questions: stat.collection.questions.map((question) => ({
        title: question.text,
        answer: question.answerOptions[question.correctAnswer],
      })),
    };

    res.status(200).json({
      msg: "Successfully fetched stats detail",
      stat: statsData,
    });
  } catch (err) {
    const error = catchError(err);
    res.status(400).json(error);
  }
};

module.exports = { getAllStats, getStatsDetail };
