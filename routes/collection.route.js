const express = require("express");
const {
  createCollection,
  getCollectionsOfUser,
  getCollectionDetail,
  getStats,
} = require("../controller/collectionController");
const Router = express.Router();

Router.post("/create", createCollection);
Router.get("/:userId", getCollectionsOfUser);
Router.get("/detail/:collectionId", getCollectionDetail);
Router.post("/stats/:collectionId", getStats);

module.exports = Router;
