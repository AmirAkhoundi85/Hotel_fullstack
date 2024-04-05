const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", indexRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/hotel_db")
  .then(() => console.log("db Connected!"))
  .catch((err) => {
    console.error(`Error connecting to the database: ${err}`);
  });

app.use(express.static("public"));

const port = 5001;
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
