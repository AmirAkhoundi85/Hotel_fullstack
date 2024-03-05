const express = require("express");
const app = express();

const hotelRouter = require("./routes/hotelRoutes");
const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");
const mongoose = require("mongoose");


const port = 5001;
app.use(express.json())
app.use(categoryRouter);
app.use(hotelRouter);
app.use(indexRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/hotel_db")
  .then(() => console.log("db Connected!"))
  .catch((err) => {
    console.error(`Error connecting to the database: ${err}`);
  });

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
