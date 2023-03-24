//Importin React hooks
import { useContext } from "react";

import { useLocation } from "react-router";

import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";

import PageLeftSideFinalCheckPage from "../../Components/Global Components/PageLeftSideFinalCheckPage";

export default function FinalCheckPage() {
  const location = useLocation();

  const { cartProducts } = useContext(ShoppingCartFunc);

  console.log(location.contactInfoState);

  //TODO Try getting all of the products in the basked from the state variable in the shopping cart context, instead of using the session storage

  const cardData = sessionStorage.getItem("cartProducts");
  console.log(JSON.parse(cardData));
  return (
    <>
      <main className="final-check-page-content-wrapper page-main-section">
        <div className="final-check-page-inner-content page-inner-content">
          <div className="final-check-page-widgets-holder page-widgets-holder">
            <PageLeftSideFinalCheckPage cartProducts={cartProducts} />
          </div>
        </div>
      </main>
    </>
  );
}
