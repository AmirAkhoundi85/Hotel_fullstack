const express = require("express");
const { index, page404 } = require("../controllers/index.controller");
const hotelRouter = require("./hotelRoutes");
const categoryRouter = require("./categoryRouter");

const indexRouter = express.Router();

indexRouter.use(hotelRouter);
indexRouter.use(categoryRouter);
indexRouter.get("/", index);
indexRouter.get("/*", page404);

module.exports = indexRouter;
