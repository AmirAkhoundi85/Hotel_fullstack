const express = require("express");
const app = express();
const {
  getAllHotels,
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
} = require("./controllers/hotelController");
const { getAllCategory } = require("./controllers/categoryController");
const port = 5003;

app.get("/", (req, res) => {
  res.send("Root route");
});

app.get("/hotels", getAllHotels);
app.get("/hotels/:id", getSingleHotel);
app.post("/hotels", createHotel);
app.put("/hotels", updateHotel);
app.delete("/hotels", deleteHotel);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
