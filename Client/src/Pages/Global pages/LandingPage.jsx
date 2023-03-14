import { useState } from "react";

//Importing React-router elements, components and hooks
import { useNavigate } from "react-router";

import axios from "axios";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function LandingPage({ productsList }) {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const products = productsList;

  console.log(products);

  //The function that sends the email information to the mailer
  function sendMail() {
    //Validates the email
    //Checks if the email contains "@"
    if (!emailAddress.includes("@")) {
      //If the email doesn't contain "@" the validation is false
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
      console.log({ emailAddress });
      axios
        //Makes a post request to the mailer server
        .post(
          "http://localhost:5000/mailer",
          { emailAddress: emailAddress },
          { headers: { "Content-Type": "application/json" } }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleTransfer = () => {
    navigate("/orderType");
  };

  return (
    <>
      <main className="landing-page-content-wrapper page-main-section">
        <div className="landing-page-inner-content">
          <h1 className="landing-page-welcome-header text-TextBig">
            Before starting your shop journey, do you want us to send you
            <b className="text-primary-color"> our catalog</b>?
          </h1>
          {emailValidation ? " " : <p>Please enter a valid email</p>}
          <input
            className="email-input-field"
            type="text"
            placeholder="Your Email..."
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <button onClick={sendMail} className="form-btn">
            Click to Send an Email
          </button>
        </div>
        <ButtonsHolder handleTransfer={handleTransfer} />
      </main>
    </>
  );
}
