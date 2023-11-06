const getAllCategory = (req, res) => {
  return res.send("All category");
};
const getSingleCategory = (req, res) => {
  return res.send("Single category");
};
const createCategory = (req, res) => {
  return res.send("create category");
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
