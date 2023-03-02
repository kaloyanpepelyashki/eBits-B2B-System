import { useState } from "react";
import PageLeftSide from "../../Components/Global Components/PageLeftSide";

export default function ProductSelectionPageSP({ productsList }) {
  /////
  ///

  //Add to cart functionality feature

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

  ////
  ////
  return (
    <>
      <main className="product-selectionSP-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content">
          <PageLeftSide
            addProduct={addProduct}
            productsList={productsList}
            cartProducts={cartProducts}
          ></PageLeftSide>
        </div>
      </main>
    </>
  );
}
