const express = require("express");

const getName = require("../Controllers/info/getName");
const infoRouter = express.Router();

infoRouter.get("/name",getName);

module.exports = infoRouter;