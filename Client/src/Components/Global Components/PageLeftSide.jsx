//Importin React hooks
import { useContext, useState } from "react";

//Importing components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";
import ProductSearchBar from "../Context Components/ProductDisplaySearchBar";
import { ShoppingCartProvider } from "../Context Components/ShoppingCartFuncContext";

export default function PageLeftSide(props) {
  const [searchQuerry, setSearchQuerry] = useState(" ");

  //Getting the context data from the context component
  const {
    cartProducts,
    funcs: { addProduct, reduceProductAmount, removeProduct },
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

  //Importing data and functions from component's props
  const productList = props.productsList;

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
      <div className="page-left-side-wrapper">
        {props.children}
        <div className="page-left-side-main-section">
          {/* <= //The input field the user types in */}
          <input
            type="text"
            placeholder="Product name here"
            onChange={(e) => setSearchQuerry(e.target.value)}
            className="page-left-side-search-bar"
          />
          {Array.isArray(filterFunc) && searchQuerry !== ""
            ? filterFunc
                .slice(0, 5)
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
          <h2 className="text-HeadingSmall">Your products :</h2>
          {cartProducts.map((product) =>
            product.qty > 0 ? (
              <div key={product.ProductIndex} style={{ display: "flex" }}>
                <h2>{product.productName}</h2>
                <h2 style={{ marginLeft: "10px" }}>
                  <b>{product.qty}</b>
                </h2>
                <button
                  style={{ marginLeft: "10px", border: "1px solid black" }}
                  onClick={() => {
                    handleReduceProductAmount(product);
                  }}
                >
                  Reduce
                </button>
                <button
                  style={{ marginLeft: "10px", border: "1px solid black" }}
                  onClick={() => {
                    handleRemoveProduct(product);
                  }}
                >
                  Remove
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </>
  );
}
