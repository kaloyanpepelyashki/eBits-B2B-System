//Importin React hooks
import { useContext } from "react";

import { useNavigate } from "react-router";

//Importing components
import {
  ShoppingCartFunc,
  ShoppingCartProvider,
} from "../../Components/Context Components/ShoppingCartFuncContext";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../Components/Global Components/PageLeftSide";

export default function ProductSelectionPageSP({ productsList }) {
  const navigate = useNavigate();
  const {
    funcs: { handlePageTransfer },
  } = useContext(ShoppingCartFunc);

  const transferFunc = (nextDestination) => {
    handlePageTransfer(nextDestination);
    console.log("In the ProductSelectionPageSP");
    console.log(handlePageTransfer);
  };
  return (
    <>
      <main className="product-selectionSP-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content product-selection-page-inner-content">
          {/* //Wrapping the PageLefSide in the ShoppingCartProvider context component, so I can pass the context functions */}
          {/* <ShoppingCartProvider> */}
          <PageLeftSide productsList={productsList}></PageLeftSide>
          <ButtonsHolder
            nextDestination={"/productSelectionPageSP"}
            transferFunc={transferFunc}
            navigate={navigate}
          />
          {/* </ShoppingCartProvider> */}
        </div>
      </main>
    </>
  );
}
