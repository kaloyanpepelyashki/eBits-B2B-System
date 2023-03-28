//Importing React hooks
import { useState } from "react";

//Importing Material design and material design components
import Icon from "@mdi/react";
import { mdiPackageVariantClosed, mdiPackageVariantClosedPlus } from "@mdi/js";

//Importing React-router elements, components and hooks
import { useNavigate } from "react-router";

//Importing Components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";

export default function TypeOfOrderPage() {
  const navigate = useNavigate();
  const [routeChoice, setRouteChoice] = useState(0);
  const [nextRoute, setNextRoute] = useState("");

  const nextDest =
    routeChoice == 1
      ? "/buyOrCreate"
      : routeChoice == 2
      ? "/productSelectionPageSP"
      : "";

  //Initiating the page transfer function
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
                className="route-choice-input mt-4"
                type="radio"
                value="1"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-semibold text-HeadingSmall">
                A kit
                <Icon
                  className="inline-block ml-5 mt-4"
                  path={mdiPackageVariantClosed}
                  size={2}
                />
              </p>
            </div>
            <div className="TypeOfOrder-page-choice-item space-x-4">
              <input
                name="route-choice"
                className="route-choice-input mt-4"
                type="radio"
                value="2"
                onChange={(e) => {
                  setRouteChoice(e.target.value);
                }}
              />
              <p className="TypeOfOrder-page-choice-text font-bold text-HeadingSmall">
                Separate products
                <Icon
                  className="inline-block ml-4 mt-5"
                  path={mdiPackageVariantClosedPlus}
                  size={2}
                />
              </p>
            </div>
          </div>
        </div>
        <ButtonsHolder handleTransfer={handleTransfer} />
      </main>
    </>
  );
}
