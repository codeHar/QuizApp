const express = require("express");
const { createUser } = require("../controller/userController");
const Router = express.Router();

Router.post("/", createUser);

module.exports = Router;
