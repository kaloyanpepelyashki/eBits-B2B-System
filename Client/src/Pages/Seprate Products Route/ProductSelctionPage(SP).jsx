//Importin React hooks
import { useContext } from "react";

//Importing components
import {
  ShoppingCartFunc,
  ShoppingCartProvider,
} from "../../Components/Context Components/ShoppingCartFuncContext";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../Components/Global Components/PageLeftSide";

export default function ProductSelectionPageSP({ productsList }) {
  const {
    funcs: { handlePageTransfer },
  } = useContext(ShoppingCartFunc);

  const transferFunc = (nextDestination) => {
    handlePageTransfer(nextDestination);
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
          />
          {/* </ShoppingCartProvider> */}
        </div>
      </main>
    </>
  );
}
