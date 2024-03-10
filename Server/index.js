const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

//midelware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`MongoDB Connected: ${mongoose.connection.host}`);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

app.use("/", require("./routes/VideoRoute"));

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
