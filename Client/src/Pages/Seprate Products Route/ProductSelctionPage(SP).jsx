//Importing components
import { ShoppingCartProvider } from "../../Components/Context Components/ShoppingCartFuncContext";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../Components/Global Components/PageLeftSide";

export default function ProductSelectionPageSP({ productsList }) {
  return (
    <>
      <main className="product-selectionSP-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content product-selection-page-inner-content">
          {/* //Wrapping the PageLefSide in the ShoppingCartProvider context component, so I can pass the context functions */}
          <ShoppingCartProvider>
            <PageLeftSide productsList={productsList}></PageLeftSide>
          </ShoppingCartProvider>
          <ButtonsHolder />
        </div>
      </main>
    </>
  );
}
