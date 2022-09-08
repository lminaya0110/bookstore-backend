require('dotenv').config()
const path = require('path')
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));
  