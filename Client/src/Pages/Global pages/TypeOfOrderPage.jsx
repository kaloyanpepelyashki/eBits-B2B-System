import { useState } from "react";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function TypeOfOrderPage() {
  const [routeChoice, setRouteChoice] = useState(0);
  const [nextRoute, setNextRoute] = useState("");

  console.log(routeChoice);

  const nextDest =
    routeChoice == 1
      ? "/buyOrCreate"
      : routeChoice == 2
      ? "/productSelectionPageSP"
      : "";
  return (
    <>
      <main className="TypeOfOrder-page-content-wrapper page-main-section">
        <div className="TypeOfOrder-inner-content">
          <h1 className="TypeOfOrder-page-header text-TextBig">
            What are you ordering?
          </h1>
          <div className="TypeOfOrder-page-route-choice-holder">
            <div className="TypeOfOrder-page-choice-item">
              <input
                name="route-choice"
                className="route-choice-input"
                type="radio"
                value="1"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text">A kit</p>
            </div>
            <div className="TypeOfOrder-page-choice-item">
              <input
                name="route-choice"
                className="route-choice-input"
                type="radio"
                value="2"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text">Separate products</p>
            </div>
          </div>
        </div>
        <ButtonsHolder nextDestination={nextDest} />
      </main>
    </>
  );
}
