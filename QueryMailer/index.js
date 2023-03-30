const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

app.get("/queryReceiver", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();

  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1Spi2lOQy2Jo4DGMLekzL-25IPd9mjteFXs-n8RhVUfg";

  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId: spreadsheetId,
  });
  res.send(metaData);
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
