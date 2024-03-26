const express = require("express");
const { getAllCategory, getSingleCategory, createCategory, deleteCategory, updateCategory } = require("../controllers/categoryController");
const categoryRouter = express.Router();

categoryRouter.get("/categories", getAllCategory);
categoryRouter.get("/categories/:id", getSingleCategory);
categoryRouter.post("/categories", createCategory);
categoryRouter.put("/categories/:id", updateCategory);
categoryRouter.delete("/categories/:id", deleteCategory);
module.exports = categoryRouter;