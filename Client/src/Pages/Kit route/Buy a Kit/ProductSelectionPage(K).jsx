import { useContext, useState } from "react";
import { ShoppingCartProvider } from "../../../Components/Context Components/ShoppingCartFuncContext";
import { ShoppingCartFunc } from "../../../Components/Context Components/ShoppingCartFuncContext";
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../../Components/Global Components/PageLeftSide";

export default function ProductSelectionPageKB({ productsList }) {
  const { cartProducts, addProduct, reduceProductAmount, removeProduct } =
    useContext(ShoppingCartFunc);

  const handleAddProduct = (product) => {
    addProduct(product);
  };
  return (
    <>
      <main className="product-selectionSP-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content product-selection-page-inner-content">
          <ShoppingCartProvider>
            <PageLeftSide
              addProduct={handleAddProduct}
              productsList={productsList}
              cartProducts={cartProducts}
            ></PageLeftSide>
          </ShoppingCartProvider>
          <ButtonsHolder />
        </div>
      </main>
    </>
  );
}
