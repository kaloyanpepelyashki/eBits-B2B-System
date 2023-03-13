import { useState, useEffect } from "react";

export default function ProductSearchBar({ product, addProduct }) {
  const [productVariations, setProductVariations] = useState([]);
  const [productWithVar, setProductWithVar] = useState({ product });

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

  let value = {
    VariationName: product.ProductName,
    VariationID: 0,
  };
  const handleVariationChoice = (e) => {
    console.log(value.VariationName);
    value = {
      VariationName: e.target.value,
      VariationID:
        e.target.options[e.target.selectedIndex].getAttribute(
          "data-variationid"
        ),
    };
    setProductWithVar((productWithVar) => ({
      ...productWithVar,
      ...value,
    }));
  };
  console.log(productWithVar);

  //The function, checking if a variation is selected
  const handleChoiceValidation = () => {
    const filteredList =
      productVariations.length !== 0
        ? productVariations[0].filter(
            (variation) => variation.ProductIndex == product.ProductIndex
          )
        : "";
    console.log(filteredList);
    if (!productWithVar.VariationName && filteredList.length > 0) {
      window.alert("Please selct a variation");
    } else {
      addProduct(productWithVar);
    }
  };
  return (
    <>
      <div className="product-search-bar-outter-wrapper">
        <select
          onChange={(e) => {
            handleVariationChoice(e);
          }}
          className="product-search-bar-select text-VariationTitle"
          defaultValue={product.ProductName}
        >
          <option data-variationid={0} value={product.ProductName}>
            {product.ProductName}
          </option>
          {productVariations.length !== 0
            ? productVariations[0].map((variation) =>
                variation.ProductIndex == product.ProductIndex ? (
                  <option
                    key={variation.VariationID}
                    value={variation.ProductName}
                    data-variationid={variation.VariationID}
                  >
                    {variation.ProductName}
                  </option>
                ) : (
                  ""
                )
              )
            : ""}
        </select>
        <div
          className="product-search-bar-clickable"
          onClick={() => {
            handleChoiceValidation();
          }}
        >
          <h2 className="text-ProductTitleSmall product-search-bar-product-title ">
            {product.ProductName}
          </h2>
        </div>
      </div>
    </>
  );
}
