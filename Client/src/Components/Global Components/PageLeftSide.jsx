//Importin React hooks
import { useContext, useState } from "react";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

//Importing components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";
import ProductSearchBar from "../Context Components/ProductDisplaySearchBar";
import { ShoppingCartProvider } from "../Context Components/ShoppingCartFuncContext";
import BasketProductsDisplay from "./BasketItemsDisplay";
import { color } from "@mui/system";
import { purple } from "@mui/material/colors";

export default function PageLeftSide(props) {
  const [searchQuerry, setSearchQuerry] = useState(" ");

  //Getting the context data from the context component
  //Destructuring the object, for a best practice use
  const {
    cartProducts,
    funcs: {
      addProduct,
      reduceProductAmount,
      increaseProductAmount,
      removeProduct,
    },
  } = useContext(ShoppingCartFunc);

  //Re-assigning the functions for the basked functionality features.
  const handleAddProduct = (product) => {
    addProduct(product);
  };
  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };
  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };
  const handleIncreaseProductAmount = (product) => {
    increaseProductAmount(product);
  };

  //Importing data and functions from component's props
  const productList = props.productsList;
  const setGlobalPrices = props.setGlobalPrices;

  //Setting the search filtering function
  //It takes the user input and filters out the array accordingly
  let filterFunc = [];
  filterFunc =
    searchQuerry !== " "
      ? productList.filter((product) =>
          product.ProductName.toLowerCase().includes(searchQuerry.toLowerCase())
        )
      : " ";

  return (
    <>
      <div className="page-left-side-wrapper block px-6 py-6 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
            focus:outline-none relative">
        {props.children}
        <div className="page-left-side-main-section">
          {/* <= //The input field the user types in */}
          <input 
            className="page-left-side-search-bar block px-4 py-2 pr-24 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none" 
            type="text"
            placeholder="Product name here..."
            onChange={(e) => setSearchQuerry(e.target.value)}
          /><Icon className="absolute ml-72 -mt-10 py-0" path={mdiMagnify} size={1} />

          {Array.isArray(filterFunc) && searchQuerry !== ""
            ? filterFunc
                .slice(0, 3)
                .map((product) => (
                  <ProductSearchBar
                    product={product}
                    addProduct={handleAddProduct}
                    key={product.ProductIndex}
                  />
                ))
            : " "}
          <div className="line line-2"></div>
        </div>
        <div className="page-left-side-bottom-section">
          <h2 className="text-cardText text-primary-color">Your products</h2>
          {cartProducts.map((product) =>
            product.qty > 0 && product.varQty > 0 ? (
              <BasketProductsDisplay
                key={product.productBaksetUnqKey}
                product={product}
                handleIncreaseProductAmount={handleIncreaseProductAmount}
                handleReduceProductAmount={handleReduceProductAmount}
                handleRemoveProduct={handleRemoveProduct}
                setGlobalPrices={setGlobalPrices}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}
