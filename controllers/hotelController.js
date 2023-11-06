// crud hotel

const getAllHotels = (req, res) => {
  return res.send("All Hotel");
};
const getSingleHotel = (req, res) => {
  return res.send("Single Hotel");
};
const createHotel = (req, res) => {
  return res.send("Create sucssesfully");
};
const updateHotel = (req, res) => {
  return res.send("Update sucssesfully");
};
const deleteHotel = (req, res) => {
  return res.send("Delete sucssesfully");
};
module.exports = {
  getAllHotels,
  getSingleHotel,
  createHotel,
  updateHotel,
  deleteHotel,
};
