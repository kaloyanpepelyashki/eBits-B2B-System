//Importing React hooks
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

  //Sets the variable that is to hold the variation information
  let value = {
    VariationName: product.ProductName,
    VariationID: 0,
  };
  //The function that handles the variation choice
  const handleVariationChoice = (e) => {
    value = {
      VariationName: e.target.value,
      VariationID:
        e.target.options[e.target.selectedIndex].getAttribute(
          "data-variationid"
        ),
    };
    //Sets the state of teh ProductWithVar variable
    setProductWithVar((productWithVar) => ({
      ...productWithVar,
      ...value,
    }));
  };

  //The function, checking if a variation is selected
  const handleChoiceValidation = () => {
    //Checks if there is a variation
    //Checks if there is a VariationName in the productWith var object
    //And checks if there are any variations in the list of variations
    if (!productWithVar.VariationName && productVariations.length > 0) {
      //If there is no selected variation and there are variations in the list, it pushes a window alert
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
            ? productVariations[0].map((variation) => (
                <option
                  key={variation.VariationID}
                  value={variation.ProductName}
                  data-variationid={variation.VariationID}
                >
                  {variation.ProductName}
                </option>
              ))
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
