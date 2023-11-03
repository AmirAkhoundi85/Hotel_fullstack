const express = require("express");
const app = express();
const port = 5003;

app.get("/", (req, res) => {
  res.send("Root route");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
