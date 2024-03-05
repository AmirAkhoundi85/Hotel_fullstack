// crud hotel

const Hotel = require("../models/Hotel");

const getAllHotels = (req, res) => {
  try {
    const hotels = Hotel.find({});
    return res.status(200).send(hotels);
  } catch (error) {
    return res.status(500).send("Internal Server Error: " + error);
  }
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
