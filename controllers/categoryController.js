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
    return res.status(200).send(category);
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

const updateCategory = async(req, res) => {
try {
   const { id } = req.params;
   const { name,description, hotels } = req.body;
  if (!name) {
    return res.status(400).send({ error: "Name is requaired" });
  }
 const updatedCategory = await Category.findByIdAndUpdate(
   id,
   {
     name,
     description,
     hotels,
   },
   { new: true }
 );

 if (!updatedCategory) {
   return res.status(404).send({ error: "Category not found" });
 }

 return res.send({ message: "Category updated successfully", updatedCategory });
} catch (error) {
  return res.status(500).send({ error: "Internal server error: "  + error });
}
};
const deleteCategory = async(req, res) => {
 try {
   const { id } = req.params;
   // const category= await  Category.findById(id);
   //   if (!category) {
   //     return res.status(404).send("Category not found");
   //   }
   // const result= await Category.delete(id);
   // if (!result) {
   //   return res.status(400).send("Deleted the category failed");
   // }
   const deleteCategory = await Category.findByIdAndDelete(id);
   if (!deleteCategory) {
    return res.status(404).send({ error: "Category not found" });
   }
   return res.status(200).send({ message: "Deleted the category success" });
 } catch (error) {
  return res.status(500).send({ error: "Internal server error: "  + error });
 }
};

module.exports = {
  getAllCategory,
  getSingleCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
