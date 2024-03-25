const Stats = require("../models/Stats");

const getAllStats = async (req, res) => {
  try {
    const { userId } = req.params;

    const stats = await Stats.find({
      user: userId,
    });

    console.log({ stats });

    res.status(200).json({
      msg: "Successfully fetched all stats",
      stats,
    });
  } catch (err) {
    const error = catchError(err);
    res.status(400).json(error);
  }
};

module.exports = { getAllStats };
