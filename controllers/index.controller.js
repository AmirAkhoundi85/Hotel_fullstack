const index = (req, res) => {
  res.send("Root route");
};

const page404 = (req, res) => {
  return res.send("Not find 404");
};

module.exports = { index, page404 };
