//Importing components
import { ShoppingCartProvider } from "../../../Components/Context Components/ShoppingCartFuncContext";
import { ShoppingCartFunc } from "../../../Components/Context Components/ShoppingCartFuncContext";
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../../Components/Global Components/PageLeftSide";
import PageLeftTopSection from "../../../Components/Global Components/PageLeftSideTopSection";

export default function ProductSelectionPageKB({ productsList }) {
  return (
    <>
      <main className="product-selectionKB-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKB-page-inner-content product-selection-page-inner-content">
          {/* //Wrapping the PageLefSide in the ShoppingCartProvider context component, so I can pass the context functions */}
          <div className="product-selectionSP-page-widgets-holder page-widgets-holder">
            <PageLeftSide productsList={productsList}>
              <PageLeftTopSection />
            </PageLeftSide>
          </div>
        </div>
        <ButtonsHolder />
      </main>
    </>
  );
}
