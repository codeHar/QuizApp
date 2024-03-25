const express = require("express");
const { getAllStats } = require("../controller/statsController");
const Router = express.Router();

Router.get("/:userId", getAllStats);

module.exports = Router;
