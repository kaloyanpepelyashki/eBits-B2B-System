import { useState } from "react";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function ChoiceBuyOrCreate() {
  const [routeChoice2, setRouteChoice2] = useState(0);
  const nextDest =
    routeChoice2 == 1
      ? "/productSelectionPageKb"
      : routeChoice2 == 2
      ? "/productSelectionPageSP"
      : "";
  return (
    <>
      <main className="TypeOfOrder-page-content-wrapper page-main-section">
        <div className="TypeOfOrder-inner-content">
          <div className="TypeOfOrder-page-route-choice-holder">
            <div className="TypeOfOrder-page-choice-item">
              <input
                name="route-choice"
                className="route-choice-input"
                type="radio"
                value="1"
                onChange={(e) => {
                  setRouteChoice2(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text">
                I want to buy a kit
              </p>
            </div>
            <div className="TypeOfOrder-page-choice-item">
              <input
                name="route-choice"
                className="route-choice-input"
                type="radio"
                value="2"
                onChange={(e) => {
                  setRouteChoice2(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text">
                I want to create a kit
              </p>
            </div>
          </div>
        </div>
        <ButtonsHolder nextDestination={nextDest} />
      </main>
    </>
  );
}
