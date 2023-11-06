const express = require("express");
const { getAllCategory, getSingleCategory, createCategory, deleteCategory, updateCategory } = require("../controllers/categoryController");
const categoryRouter = express.Router();

categoryRouter.get("/category", getAllCategory);
categoryRouter.get("/category/:id", getSingleCategory);
categoryRouter.post("/category", createCategory);
categoryRouter.put("/category/:id", updateCategory);
categoryRouter.delete("/category", deleteCategory);
module.exports = categoryRouter;