const Category = require("../models/Category");

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});//find returned array
    return res.status(200).send(categories);
  } catch (error) {
    return res.status(500).send("Internal server error: " + error);
  }
};
const getSingleCategory =async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) {
      return res
        .status(404)
        .send(`The category with the id ${id} does not exist.`);
    }
    return res.status(200).send(hotel);
  } catch (error) {
    return res.status(500).send("Internal Server Error: " + error);
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).send("Name is requaired");
    }

    const newCategory = Category({
      name,
      description,
    });
    await newCategory.save()

    return res.status(201).send({message:"created category" , newCategory});

  } catch (error) {
    return res.status(500).send("Internal server error: " + error);
  }
};

const updateCategory = (req, res) => {
  return res.send("Update category");
};
const deleteCategory = (req, res) => {
  return res.send("Delete category");
};

module.exports = {
  getAllCategory,
  getSingleCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
