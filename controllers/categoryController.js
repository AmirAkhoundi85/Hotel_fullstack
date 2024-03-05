const Category = require("../models/Category");

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});//find returned array
    return res.status(200).send(categories);
  } catch (error) {
    return res.status(500).send("Internal server error: " + error);
  }
};
const getSingleCategory = (req, res) => {
  return res.send("Single category");
};

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).send("Name is requaired");
    }

    const newCategory = await Category.create({
      name,
      description,
    });

    return res.status(201).send({message:"created category" , newCategory});

  } catch (error) {
    return res.status(500).send("Internal server error: " + error);
  }
};
const deleteCategory = (req, res) => {
  return res.send("Delete category");
};
const updateCategory = (req, res) => {
  return res.send("Update category");
};
module.exports = {
  getAllCategory,
  getSingleCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
