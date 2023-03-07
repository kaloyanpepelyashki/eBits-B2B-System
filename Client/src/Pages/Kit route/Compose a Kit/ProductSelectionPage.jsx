//Importing components
import { ShoppingCartProvider } from "../../../Components/Context Components/ShoppingCartFuncContext";
import { ShoppingCartFunc } from "../../../Components/Context Components/ShoppingCartFuncContext";
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../../Components/Global Components/PageLeftSide";
import PageLeftTopSection from "../../../Components/Global Components/PageLeftSideTopSection";

export default function ProductSelectionPageKC({ productsList }) {
  return (
    <>
      <main className="product-selectionKC-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKC-page-inner-content product-selection-page-inner-content">
          {/* //Wrapping the PageLefSide in the ShoppingCartProvider context component, so I can pass the context functions */}
          <ShoppingCartProvider>
            <PageLeftSide productsList={productsList}>
              <PageLeftTopSection />
            </PageLeftSide>
          </ShoppingCartProvider>
          <ButtonsHolder />
        </div>
      </main>
    </>
  );
}
