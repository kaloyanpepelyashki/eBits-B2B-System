import { useState } from "react";
import axios from "axios";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function LandingPage({ productsList }) {
  const [emailAddress, setEmailAddress] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);
  const products = productsList;

  console.log(products);

  function sendMail() {
    if (!emailAddress.includes("@")) {
      setEmailValidation(false);
    } else {
      console.log({ emailAddress });
      axios
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

      setEmailValidation(true);
    }
  }

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
        <ButtonsHolder nextDestination={"/orderType"} />
      </main>
    </>
  );
}
