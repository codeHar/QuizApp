const express = require("express");
const {
  getAllStats,
  getStatsDetail,
} = require("../controller/statsController");
const Router = express.Router();

Router.get("/:userId", getAllStats);
Router.get("/detail/:statsId", getStatsDetail);

module.exports = Router;
