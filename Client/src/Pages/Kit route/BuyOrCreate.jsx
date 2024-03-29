//Importing React hooks
import { useState } from "react";

//Importing React-router elements, components and hooks
import { useNavigate } from "react-router";

//Importing components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function ChoiceBuyOrCreate() {
  const navigate = useNavigate();
  const [routeChoice2, setRouteChoice2] = useState(0);
  const nextDest =
    routeChoice2 == 1
      ? "/productSelectionPageKb"
      : routeChoice2 == 2
      ? "/productSelectionPageKC"
      : "";

  const handleTransfer = () => {
    navigate(nextDest);
  };
  return (
    <>
      <main className="TypeOfOrder-page-content-wrapper page-main-section">
        <div className="TypeOfOrder-inner-content">
          <div className="TypeOfOrder-page-route-choice-hold">
            <div className="TypeOfOrder-page-choice-item">
              <input
                name="route-choice"
                className="route-choice-input mt-40 mr-4"
                type="radio"
                value="1"
                onChange={(e) => {
                  setRouteChoice2(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-semibold text-HeadingSmall mt-40 mb-10">
                I want to buy a kit
              </p>
            </div>
            <div className="TypeOfOrder-page-choice-item">
              <input
                name="route-choice"
                className="route-choice-input mr-4"
                type="radio"
                value="2"
                onChange={(e) => {
                  setRouteChoice2(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-semibold text-HeadingSmall">
                I want to create a kit
              </p>
            </div>
          </div>
        </div>
        <ButtonsHolder
          back={"Yes"}
          title={"Next"}
          handleTransfer={handleTransfer}
        />
      </main>
    </>
  );
}
