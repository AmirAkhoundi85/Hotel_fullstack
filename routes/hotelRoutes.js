const express = require("express");
const {
  getAllHotels,
  getSingleHotel,
  createHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelController");
const hotelRouter = express.Router();

hotelRouter.get("/hotels", getAllHotels);
hotelRouter.get("/hotels/:id", getSingleHotel);
hotelRouter.post("/hotels", createHotel);
hotelRouter.put("/hotels/:id", updateHotel);
hotelRouter.delete("/hotels/:id", deleteHotel);

module.exports = hotelRouter;
