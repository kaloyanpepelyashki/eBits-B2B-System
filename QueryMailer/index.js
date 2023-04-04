const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const googleCred = require("./credentials.json");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const testArray = [
  {
    name: "Test Product 1",
    ProductIndex: 1,
    ProductVariation: "Test var 1",
    Amount: 12,
    Price: "21.09",
  },
  {
    name: "Test Product 2",
    ProductIndex: 1,
    ProductVariation: "Test var 2",
    Amount: 1,
    Price: "10.00",
  },
  {
    name: "Test Product 3",
    ProductIndex: 1,
    ProductVariation: "Test var 2",
    Amount: 22,
    Price: "14.44",
  },
];

const testArrayCustomer = [
  {
    name: "Jhon",
    lastName: "Doe",
    email: "jhondDoe@gmail.com",
    phone: "455050505",
    street: "testStreet",
  },
];

app.use(bodyParser.json());

app.get("/queryReceiver", async (req, res) => {
  //TODO Make it fill out the sheet on a request from the client side

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

  const googlePrivKey = googleCred.private_key;
  const googleCliEmail = googleCred.client_email;

  const document = new GoogleSpreadsheet(
    "1Spi2lOQy2Jo4DGMLekzL-25IPd9mjteFXs-n8RhVUfg"
  );
  await document.useServiceAccountAuth({
    client_email: googleCliEmail,
    private_key: googlePrivKey,
  });

  const sheet = await document.addSheet({
    title: "orderProducts8",
    headerValues: [
      "Product Name",
      "Product Index",
      "Product Variation",
      "Amount",
      "Price",
    ],
  });

  for (const data of testArray) {
    const rowValues = [
      data.name,
      data.ProductIndex,
      data.ProductVariation,
      data.Amount,
      data.Price,
    ];
    await sheet.addRow(rowValues);
  }

  const sheet2 = await document.addSheet({
    title: "orderCustomerInfo8",
    headerValues: ["Name", "Last Name", "Email", "Phone", "Street"],
  });

  for (const data of testArrayCustomer) {
    const rowValues = [
      data.name,
      data.lastName,
      data.email,
      data.phone,
      data.street,
    ];
    await sheet2.addRow(rowValues);
  }

  //TODO Make it send an confirmation email to the client (the email referenced by the client)
  //TODO Make it send a confirmation email to Nikolaj, that there is an incomng query form a customer
  res.send(metaData.data);
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
