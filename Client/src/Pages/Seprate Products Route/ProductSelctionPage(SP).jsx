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
import SeparateProductsReceipt from "../../Components/Global Components/SeparateProductReceipt";

export default function ProductSelectionPageSP({ productsList }) {
  const navigate = useNavigate();
  //Destructuring from the ShoppingCartFunc context
  const {
    funcs: { handlePageTransfer },
    globalPrices,
    setGlobalPrices,
  } = useContext(ShoppingCartFunc);

  const handleTransfer = () => {
    handlePageTransfer();
    navigate("/contactInfoPage");
  };

  return (
    <>
      <main className="product-selectionSP-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content product-selection-page-inner-content">
          <div className="product-selectionSP-page-widgets-holder product-selection-page-widgets-holder">
            <PageLeftSide
              globalPrices={globalPrices}
              setGlobalPrices={setGlobalPrices}
              productsList={productsList}
            ></PageLeftSide>
            <SeparateProductsReceipt globalPrices={globalPrices} />
          </div>
        </div>
        <ButtonsHolder handleTransfer={handleTransfer} />
      </main>
    </>
  );
}
