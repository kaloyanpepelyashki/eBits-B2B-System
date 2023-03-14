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
          <PageLeftSide
            globalPrices={globalPrices}
            setGlobalPrices={setGlobalPrices}
            productsList={productsList}
          ></PageLeftSide>
          <ButtonsHolder handleTransfer={handleTransfer} />
        </div>
      </main>
    </>
  );
}
