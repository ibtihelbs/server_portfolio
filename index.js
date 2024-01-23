const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const projectRoute = require("./routes/projects");

app.use(cors());

dotenv.config();
mongoose
  .connect(process.env.SECRET_MONGO)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/api/projects", projectRoute);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
