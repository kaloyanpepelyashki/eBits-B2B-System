const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

app.get("/mailer", async function (req, res, next) {
  res.send("Hello World!");
});

//App post mailer
//Getting the data from the client side
app.post("/mailer", (req, res, next) => {
  const email = req.body.emailAddress;

  //Declaring a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.simply.com",
    port: 2525,
    auth: {
      user: "kontakt@ebits.dk",
      pass: "v3djI553Ek91",
    },
  });

  //Declaring the options for the transporter. (where to send the email, from who, subject and body of the email)
  const options = {
    from: "kontakt@ebits.dk",
    to: email,
    subject: "Test",
    text: "Just a test email sent from node module! This mail was sent automatically",
  };

  //Sending the email
  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error sending mail");
    } else {
      console.log("Email sent" + info.response);
      res.send("email sent");
    }
  });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
