import { useState } from "react";
import ProductSearchBar from "../Context Components/ProductDisplaySearchBar";

export default function PageLeftSide(props) {
  const [searchQuerry, setSearchQuerry] = useState(" ");

  //Importing data and functions from component's props
  const productList = props.productsList;

  const { addProduct, removeProduct, reduceProductAmount } = props;

  console.log(productList);
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
        <div className="page-left-side-top-section">
          <h2>Kit</h2>
          <div className="line"></div>
          {props.children}
        </div>
        <div className="page-left-side-main-section">
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
                    addProduct={addProduct}
                    key={product.ProductIndex}
                  />
                ))
            : " "}
          <div className="line line-2"></div>
        </div>
        <div className="page-left-side-bottom-section">
          <h2 className="text-HeadingSmall">Your products :</h2>
          {props.cartProducts.map((product) =>
            product.qty > 0 ? (
              <div key={product.ProductIndex} style={{ display: "flex" }}>
                <h2>{product.productName}</h2>
                <h2 style={{ marginLeft: "10px" }}>
                  <b>{product.qty}</b>
                </h2>
                <button
                  style={{ marginLeft: "10px", border: "1px solid black" }}
                  onClick={() => {
                    reduceProductAmount(product);
                  }}
                >
                  Reduce
                </button>
                <button
                  style={{ marginLeft: "10px", border: "1px solid black" }}
                  onClick={() => {
                    removeProduct(product);
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
