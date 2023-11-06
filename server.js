const express = require("express");
const app = express();
const hotelRouter = require("./routes/hotelRoutes");
const indexRouter = require("./routes/indexRouter");

const port = 5003;
app.use(hotelRouter);
app.use(indexRouter);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
