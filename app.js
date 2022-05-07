const express = require("express");
const router = require("./routes/index")
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views")

mongoose.connect("mongodb://localhost:27017/node", { useNewUrlParser:true, useUnifiedToplogy:true}, (err) => {
  if (err) {
    console.error("mongoDB disconnected!");
  }

  console.log("mongoDB connected");
});

app.listen(8080, () => console.log("Server listening on port 8080"));