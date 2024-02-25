const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/user.route");

require("./connectDb");

const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(express.json());

//route middlewares
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("What up");
});

app.listen(PORT || 3000, () => {
  console.log(`Server running at : http://localhost:${PORT}`);
});
