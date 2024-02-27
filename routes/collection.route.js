const express = require("express");
const {
  createCollection,
  getCollectionsOfUser,
} = require("../controller/collectionController");
const Router = express.Router();

Router.post("/create", createCollection);
Router.get("/:userId", getCollectionsOfUser);

module.exports = Router;
