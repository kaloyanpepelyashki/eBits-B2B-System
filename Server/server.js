require("dotenv").config();
const candymail = require("candymail");
const express = require("express");

const app = express();

app.get("/", async function (req, res, next) {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
