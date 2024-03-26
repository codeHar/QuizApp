const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/user.route");
const collectionRoutes = require("./routes/collection.route");
const statsRoute = require("./routes/stats.route");

require("./config/connectDb");

const PORT = process.env.PORT;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//route middlewares
app.use("/api/user", userRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/stats", statsRoute);

app.get("/", (req, res) => {
  res.send("What up");
});

app.listen(PORT || 3000, () => {
  console.log(`Server running at : http://localhost:${PORT}`);
});
