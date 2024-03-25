const Collection = require("../models/Collection");
const Stats = require("../models/Stats");
const catchError = require("../utils/CatchError");

const createCollection = async (req, res) => {
  try {
    console.log({ req: req?.body });
    const { title, description, createdBy, questions } = req.body;

    if (!title) {
      throw new Error("Title is required");
    }

    if (!createdBy) {
      throw new Error("User Id is required");
    }

    if (questions?.length == 0) {
      throw new Error("At least one questions is required");
    }

    console.log(title, description, createdBy, questions);

    const collection = await Collection.create({
      title,
      description,
      createdBy,
      questions,
    });

    res
      .status(200)
      .json({ msg: "Collection created successfully", collection });
  } catch (err) {
    const error = catchError(err);
    res.status(400).json(error);
  }
};

const getCollectionsOfUser = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log({ userId });

    const collections = await Collection.find({
      createdBy: userId,
    });

    res
      .status(200)
      .json({ msg: "Collections retrieved successfully", collections });
  } catch (err) {
    const error = catchError(err);
    res.status(400).json(error);
  }
};

const getCollectionDetail = async (req, res) => {
  try {
    const { collectionId } = req.params;
    console.log({ collectionId });

    const collections = await Collection.findById(collectionId);

    res
      .status(200)
      .json({ msg: "Collections retrieved successfully", collections });
  } catch (err) {
    const error = catchError(err);
    res.status(400).json(error);
  }
};

const getStats = async (req, res) => {
  try {
    console.log("getting stats");
    const { collectionId } = req.params;
    console.log({ collectionId });
    const { questionAnswers } = req.body;

    if (!questionAnswers || questionAnswers?.length == 0) {
      throw new Error("Question and Answers not valid");
    }

    console.log({ questionAnswers });

    const collections = await Collection.findById(collectionId);
    const userId = collections?.createdBy;
    const correctQuestionAnswersList = collections?.questions;

    console.log("damn");
    const {
      correctPoints,
      correctQuestionAnswers,
      incorrectQuestionAnswers,
      totalPoints,
    } = correctQuestionAnswersList.reduce(
      (total, current, index) => {
        if (questionAnswers[index].answer == current.correctAnswer) {
          total.correctQuestionAnswers = [
            ...total.correctQuestionAnswers,
            {
              ...questionAnswers[index],
              answer: current?.answerOptions[index],
            },
          ];
          total.correctPoints += 1;
        } else {
          total.incorrectQuestionAnswers = [
            ...total.incorrectQuestionAnswers,
            {
              ...questionAnswers[index],
              answer: current?.answerOptions[index],
            },
          ];
        }
        total.totalPoints += 1;
        return total;
      },
      {
        correctQuestionAnswers: [],
        incorrectQuestionAnswers: [],
        correctPoints: 0,
        totalPoints: 0,
      }
    );

    const stat = await Stats.create({
      correctPoints,
      correctQuestionAnswers,
      incorrectQuestionAnswers,
      totalPoints,
      user: userId,
      collectionName: collections.title,
    });

    res.status(200).json({
      msg: "Result retrieved successfully",
      stats: {
        correctPoints,
        totalPoints,
        correctQuestionAnswers,
        incorrectQuestionAnswers,
        statId: stat.id,
      },
    });
  } catch (err) {
    const error = catchError(err);
    res.status(400).json(error);
  }
};

module.exports = {
  createCollection,
  getCollectionsOfUser,
  getCollectionDetail,
  getStats,
};
