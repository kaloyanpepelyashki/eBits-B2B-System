import { useState, useEffect } from "react";

export default function ProductSearchBar({ product, addProduct }) {
  const [productVariations, setProductVariations] = useState([]);

  //Fetching the variations from the server
  //////
  ////
  //

  useEffect(() => {
    const sendPostRequest = async () => {
      //Sending a POST request to the server with the product index
      await fetch("http://65.109.137.46:5000/apivar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ProductIndex: product.ProductIndex,
        }),
      })
        //The server retreives a list of variations that match the product index
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            setProductVariations((prevList) => [...prevList, data]);
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    sendPostRequest();
  }, []);

  //
  ////
  //////

  return (
    <>
      <div
        className="product-search-bar-outter-wrapper"
        onClick={() => {
          addProduct(product);
        }}
      >
        <select className="product-search-bar-select text-VariationTitle">
          {productVariations.length !== 0
            ? productVariations[0].map((variation) =>
                variation.ProductIndex == product.ProductIndex ? (
                  <option>{variation.ProductName}</option>
                ) : (
                  ""
                )
              )
            : ""}
        </select>
        <h2 className="text-ProductTitleSmall">{product.ProductName}</h2>
      </div>
    </>
  );
}
