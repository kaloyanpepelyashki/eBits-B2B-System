//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useLocation } from "react-router";

import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";

//Importing components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSideFinalCheckPage from "../../Components/Global Components/PageLeftSideFinalCheckPage";

export default function FinalCheckPage(props) {
  const location = useLocation();
  const { productList } = props;
  const { cartProducts } = useContext(ShoppingCartFunc);

  //TODO Try getting all of the products in the basked from the state variable in the shopping cart context, instead of using the session storage

  return (
    <>
      <main className="final-check-page-content-wrapper page-main-section">
        <div className="final-check-page-inner-content page-inner-content">
          <div className="final-check-page-widgets-holder page-widgets-holder">
            <PageLeftSideFinalCheckPage
              productList={productList}
              cartProducts={cartProducts}
            />
          </div>
        </div>
        <ButtonsHolder />
      </main>
    </>
  );
}
