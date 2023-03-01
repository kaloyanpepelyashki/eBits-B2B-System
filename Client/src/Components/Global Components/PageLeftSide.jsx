import { useState } from "react";

export default function PageLeftSide({ productsList }) {
  const [searchQuerry, setSearchQuerry] = useState(" ");
  const productList = productsList;

  console.log(productList);
  let filterFunc = [];
  filterFunc =
    searchQuerry !== " "
      ? productList.filter((product) =>
          product.ProductName.includes(searchQuerry)
        )
      : " ";

  return (
    <>
      <div className="page-left-side-wrapper">
        <div className="page-left-side-top-section">
          <h2>Kit</h2>
          <div className="line"></div>
        </div>
        <div className="page-left-side">
          <input
            type="text"
            placeholder="Product name here"
            onChange={(e) => setSearchQuerry(e.target.value)}
          />
          {Array.isArray(filterFunc) && searchQuerry !== ""
            ? filterFunc
                .slice(0, 5)
                .map((product) => <h2>{product.ProductName}</h2>)
            : " "}
        </div>
      </div>
    </>
  );
}
