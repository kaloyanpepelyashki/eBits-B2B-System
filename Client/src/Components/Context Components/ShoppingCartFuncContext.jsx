//Importing React hooks
import { createContext, useState } from "react";

export const ShoppingCartFunc = createContext();

export const ShoppingCartProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const funcs = {
    addProduct: (product) => {
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
    },

    //<== REDUCE AMOUNT FROM CARD CART FUNCTIONALITY FEATURE

    reduceProductAmount: (product) => {
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
    },

    //<== REMOVE FROM CART FUNCTIONALITY FEATURE

    removeProduct: (product) => {
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
    },
  };

  return (
    <ShoppingCartFunc.Provider value={{ cartProducts, funcs, setCartProducts }}>
      {props.children}
    </ShoppingCartFunc.Provider>
  );
};
