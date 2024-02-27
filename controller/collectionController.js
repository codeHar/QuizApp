const Collection = require("../models/Collection");
const catchError = require("../utils/CatchError");

const createCollection = async (req, res) => {
  try {
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

module.exports = { createCollection, getCollectionsOfUser };
