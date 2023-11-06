const express = require("express");
const app = express();
const hotelRouter = require("./routes/hotelRoutes");
const indexRouter = require("./routes/indexRouter");
const categoryRouter = require("./routes/categoryRouter");


const port = 5003;
app.use(categoryRouter);
app.use(hotelRouter);
app.use(indexRouter);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
