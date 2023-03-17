import { useState } from "react";

//Importing React-router elements, components and hooks
import { useNavigate } from "react-router";

import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function TypeOfOrderPage() {
  const navigate = useNavigate();
  const [routeChoice, setRouteChoice] = useState(0);
  const [nextRoute, setNextRoute] = useState("");

  console.log(routeChoice);

  const nextDest =
    routeChoice == 1
      ? "/buyOrCreate"
      : routeChoice == 2
      ? "/productSelectionPageSP"
      : "";

  const handleTransfer = () => {
    navigate(nextDest);
  };

  return (
    <>
      <main className="TypeOfOrder-page-content-wrapper page-main-section">
        <div className="TypeOfOrder-inner-content">
          <h1 className="TypeOfOrder-page-header text-TextBig text-primary-color font-normal mt-20 mb-10">
            What are you ordering?
          </h1>
          <div className="TypeOfOrder-page-route-choice-holder mx-8">
            <div className="TypeOfOrder-page-choice-item font-semibold space-x-4">
              <input
                name="route-choice"
                className="route-choice-input"
                type="radio"
                value="1"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-semibold text-HeadingSmall">A kit</p>
            </div>
            <div className="TypeOfOrder-page-choice-item space-x-4">
              <input
                name="route-choice"   
                className="route-choice-input"
                type="radio"
                value="2"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-bold text-HeadingSmall">Separate products</p>
            </div>
          </div>
        </div>
        <ButtonsHolder handleTransfer={handleTransfer} />
      </main>
    </>
  );
}
