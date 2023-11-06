const express = require("express");
const { index, page404 } = require("../controllers/index.controller");

const indexRouter = express.Router();

indexRouter.get("/", index);
indexRouter.get("/*", page404);

module.exports = indexRouter;
