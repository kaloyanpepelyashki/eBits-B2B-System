//Importing components
import { useContext } from "react";

//Importing React-router elements and components
import { useNavigate } from "react-router";

//Importing Context components
import { ShoppingCartFunc } from "../../../Components/Context Components/ShoppingCartFuncContext";

//Importing Components
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import KitReceipt from "../../../Components/Global Components/KitReceipt";
import PageLeftSide from "../../../Components/Global Components/PageLeftSide";
import PageLeftTopSection from "../../../Components/Global Components/PageLeftSideTopSection";

export default function ProductSelectionPageKC({ productsList }) {
  const navigate = useNavigate();

  return (
    <>
      <main className="product-selectionKC-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKC-page-inner-content product-selection-page-inner-content">
          <div className="product-selectionKC-page-widgets-holder page-widgets-holder">
            <PageLeftSide productsList={productsList}>
              <PageLeftTopSection />
            </PageLeftSide>
            <KitReceipt />
          </div>
          <ButtonsHolder />
        </div>
      </main>
    </>
  );
}
