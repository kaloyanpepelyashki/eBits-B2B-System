import { useState } from "react";
import axios from "axios";

export default function LandingPage({ productsList }) {
  const [emailAddress, setEmailAddress] = useState("");
  const products = productsList;

  console.log(products);

  function sendMail() {
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
  }

  return (
    <>
      <main className="landing-page-content-wrapper page-main-section">
        <div className="landing-page-inner-content">
          <h1 className="landing-page-welcome-header">
            Before starting your shop journey, do you want us to send you
            <b className="text-primary-color"> our catalog</b>?
          </h1>
          <input
            className="block w-full text-sm text-slate-500"
            type="text"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <button onClick={sendMail} className="form-btn">
            Click to Send an Email
          </button>
        </div>
      </main>
    </>
  );
}
