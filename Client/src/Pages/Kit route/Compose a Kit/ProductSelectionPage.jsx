//Importing components
import { useContext } from "react";

//Importing React-router elements and components
import { useNavigate } from "react-router";

//Importing Context components
import { ShoppingCartFunc } from "../../../Components/Context Components/ShoppingCartFuncContext";

//Importing Components
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../../Components/Global Components/PageLeftSide";
import PageLeftTopSection from "../../../Components/Global Components/PageLeftSideTopSection";

export default function ProductSelectionPageKC({ productsList }) {
  const navigate = useNavigate();
  const { cartProducts, globalPrices, setGlobalPrices } =
    useContext(ShoppingCartFunc);
  return (
    <>
      <main className="product-selectionKC-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKC-page-inner-content product-selection-page-inner-content">
          <PageLeftSide
            globalPrices={globalPrices}
            setGlobalPrices={setGlobalPrices}
            productsList={productsList}
          >
            <PageLeftTopSection />
          </PageLeftSide>
          <ButtonsHolder />
        </div>
      </main>
    </>
  );
}
