//Importing React hooks
import { createContext, useState } from "react";

export const ShoppingCartFunc = createContext();

export const ShoppingCartProvider = (props) => {
  const [cartProducts, setCartProducts] = useState([]);

  const funcs = {
    addProduct: (product) => {
      //Return true if there is a product with an index in the cart, that is equal to the product index you are adding to the cart now
      const doesExist = cartProducts.find(
        (item) =>
          item.product.ProductName === product.product.ProductName &&
          item.product.ProductIndex === product.product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID
      );
      //If doesExist is true, it adds one more to the qty (quantity)  of the product
      if (doesExist) {
        setCartProducts(
          cartProducts.map((item) =>
            item.product.ProductName === product.product.ProductName &&
            item.product.ProductIndex === product.product.ProductIndex &&
            item.VariationName?.toLowerCase() ===
              product.VariationName?.toLowerCase() &&
            item.VariationID === product.VariationID
              ? {
                  ...doesExist,
                  qty: doesExist.qty + 1,
                  varQty: doesExist.varQty + 1,
                }
              : item
          )
        );
        //If doesExist is not true, it just adds the product to the cart with quantity 1
      } else {
        setCartProducts([
          ...cartProducts,
          {
            ...product,
            qty: 1,
            varQty: 1,
            productName: product.product.ProductName,
            VariationName: product.VariationName,
            VariationID: product.VariationID,
            productBaksetUnqKey: `${product.product.ProductIndex} / ${product.VariationID}`,
          },
        ]);
        console.log(cartProducts);
      }
    },

    //<== REDUCE AMOUNT FROM CARD CART FUNCTIONALITY FEATURE

    reduceProductAmount: (product) => {
      const doesExist = cartProducts.find(
        (item) =>
          item.product.ProductName === product.product.ProductName &&
          item.product.ProductIndex === product.product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID &&
          item.productBaksetUnqKey === product.productBaksetUnqKey
      );
      if (doesExist.qty === 1 && doesExist.varQty === 1) {
        setCartProducts(
          cartProducts.filter(
            (item) =>
              //Code I removed on last deb
              // item.product.ProductName !== product.product.ProductName &&
              // item.product.ProductIndex !== product.product.ProductIndex &&
              item.VariationName?.toLowerCase() !==
                product.VariationName?.toLowerCase() &&
              item.VariationID !== product.VariationID
          )
        );
      } else {
        setCartProducts(
          cartProducts.map((item) =>
            item.product.ProductName === product.product.ProductName &&
            item.product.ProductIndex === product.product.ProductIndex &&
            item.VariationName?.toLowerCase() ===
              product.VariationName?.toLowerCase() &&
            item.VariationID === product.VariationID
              ? {
                  ...doesExist,
                  qty: doesExist.qty - 1,
                  varQty: doesExist.varQty - 1,
                }
              : item
          )
        );
      }
    },

    //<== REMOVE FROM CART FUNCTIONALITY FEATURE

    removeProduct: (product) => {
      const doesExist = cartProducts.find(
        (item) =>
          item.product.ProductName === product.product.ProductName &&
          item.product.ProductIndex === product.product.ProductIndex &&
          item.VariationName?.toLowerCase() ===
            product.VariationName?.toLowerCase() &&
          item.VariationID === product.VariationID &&
          item.productBaksetUnqKey === product.productBaksetUnqKey
      );
      if (doesExist.qty === 1) {
        setCartProducts(
          cartProducts.filter(
            (item) =>
              //Code I removed on last deb
              // item.product.ProductName !== product.product.ProductName &&
              // item.product.ProductIndex !== product.product.ProductIndex &&
              item.VariationName?.toLowerCase() !==
              product.VariationName?.toLowerCase()
          )
        );
      } else {
        setCartProducts(
          cartProducts.map((item) =>
            item.product.ProductName === product.product.ProductName &&
            item.product.ProductIndex === product.product.ProductIndex &&
            item.VariationName?.toLowerCase() ===
              product.VariationName?.toLowerCase() &&
            item.VariationID === product.VariationID &&
            item.productBaksetUnqKey === product.productBaksetUnqKey
              ? {
                  ...doesExist,
                  qty: (doesExist.qty = 0),
                  varQty: (doesExist.varQty = 0),
                }
              : item
          )
        );
      }
    },
  };
  console.log(cartProducts);

  return (
    <ShoppingCartFunc.Provider value={{ cartProducts, funcs, setCartProducts }}>
      {props.children}
    </ShoppingCartFunc.Provider>
  );
};
