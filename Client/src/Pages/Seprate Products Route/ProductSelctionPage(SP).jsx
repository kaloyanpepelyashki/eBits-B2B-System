import { useState } from "react";
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../Components/Global Components/PageLeftSide";

export default function ProductSelectionPageSP({ productsList }) {
  /////
  ///

  //<== SHOPING CART FUNCTIONALITY FEATURE

  const [cartProducts, setCartProducts] = useState([]);

  //Add to cart function
  const addProduct = (product) => {
    //Return true if there is a product with an index in the cart, that is equal to the product index you are adding to the cart now
    const doesExist = cartProducts.find(
      (item) => item.ProductIndex === product.ProductIndex
    );
    //If doesExist is true, it adds one more to the qty (quantity)  of the product
    if (doesExist) {
      setCartProducts(
        cartProducts.map((item) =>
          item.ProductIndex === product.ProductIndex
            ? { ...doesExist, qty: doesExist.qty + 1 }
            : item
        )
      );
      //If doesExist is not true, it just adds the product to the cart with quantity 1
    } else {
      setCartProducts([
        ...cartProducts,
        { ...product, qty: 1, productName: product.ProductName },
      ]);
    }
  };

  //<== REDUCE AMOUNT FROM CARD CART FUNCTIONALITY FEATURE

  const reduceProductAmount = (product) => {
    const doesExist = cartProducts.find(
      (item) => item.ProductIndex === product.ProductIndex
    );
    if (doesExist.qty === 1) {
      setCartProducts(
        cartProducts.filter(
          (item) => item.ProductIndex !== product.ProductIndex
        )
      );
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.ProductIndex === product.ProductIndex
            ? { ...doesExist, qty: doesExist.qty - 1 }
            : item
        )
      );
    }
  };

  //<== REMOVE FROM CART FUNCTIONALITY FEATURE

  const removeProduct = (product) => {
    const doesExist = cartProducts.find(
      (item) => item.ProductIndex === product.ProductIndex
    );
    if (doesExist.qty === 1) {
      setCartProducts(
        cartProducts.filter(
          (item) => item.ProductIndex !== product.ProductIndex
        )
      );
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.ProductIndex === product.ProductIndex
            ? { ...doesExist, qty: (doesExist.qty = 0) }
            : item
        )
      );
    }
  };

  ////
  ////

  return (
    <>
      <main className="product-selectionSP-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content product-selection-page-inner-content">
          <PageLeftSide
            addProduct={addProduct}
            removeProduct={removeProduct}
            reduceProductAmount={reduceProductAmount}
            productsList={productsList}
            cartProducts={cartProducts}
          ></PageLeftSide>
          <ButtonsHolder />
        </div>
      </main>
    </>
  );
}
