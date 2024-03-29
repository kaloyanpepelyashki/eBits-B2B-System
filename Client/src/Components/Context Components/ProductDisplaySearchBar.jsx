//Importing React hooks
import React, { useState, useEffect } from "react";

//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default React.memo(function ProductSearchBar({ product, addProduct }) {
  const [productWithVar, setProductWithVar] = useState({});
  const [variationAndPrice, setVariationAndPrice] = useState([]);

  //Fetching the variations from the server
  //////
  ////
  //

  useEffect(() => {
    //Fetching the variations and the prices for a product
    const varPostRequest = async () => {
      const response = await fetch("http://65.109.137.46:5000/apivar", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //Sending a post request with the productIndex as body content
        body: JSON.stringify({
          ProductIndex: product.ProductIndex,
        }),
      });
      const data = await response.json();
      setVariationAndPrice(data);
    };
    varPostRequest();
  }, []);
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
      ProductName: product.ProductName,
      ProductIndex: product.ProductIndex,
      VariationName: e.target.value,
      VariationID:
        e.target.options[e.target.selectedIndex].getAttribute(
          "data-variationid"
        ),
      Price: e.target.options[e.target.selectedIndex].getAttribute(
        "data-variationprice"
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
    if (
      !productWithVar.VariationName &&
      (!productWithVar.Price || productWithVar.Price === 0) &&
      productWithVar.VariationName !== "select a variation"
    ) {
      //If there is no selected variation and there are variations in the list, it pushes a window alert
      window.alert("Please selct a variation");
    } else {
      addProduct(productWithVar);
    }
  };
  return (
    <div
      className="product-search-bar-outter-wrapper product-search-bar px-8 py-5 bg-white border-white border-slate-300 border-round text-sm shadow-sm
            focus:outline-none"
    >
      <select
        onChange={(e) => {
          handleVariationChoice(e);
        }}
        className="product-search-bar-select product-search-bar text-VariationTitle bg-selector-color text-txt-white-color round-sm border-round"
      >
        <option>select a variation</option>
        {variationAndPrice.length !== 0 ? (
          variationAndPrice.map((variation) => (
            <option
              key={variation.VariationID}
              value={variation.ProductName}
              data-variationid={variation.VariationID}
              data-variationprice={variation.Price}
            >
              {variation.ProductName}&nbsp; &nbsp; - &nbsp; &nbsp;
              {variation.Price} DKK
            </option>
          ))
        ) : (
          <option
            data-variationid={0}
            value={product.ProductName}
            data-variationprice={product.Price}
          >
            {product.ProductName} &nbsp; &nbsp; - &nbsp; &nbsp;
            {product.Price} DKK
          </option>
        )}
      </select>

      <div className="flex product-search-bar items-center space-x-5 ml-10 mr-10">
        <img
          className="w-10 h-10 object-contain"
          src={`http://65.109.137.46:5000/img/${product.ProductIndex}_0.jpg`}
          alt={product.ProductName}
        />

        <div
          className="product-search-bar-clickable product-search-bar rounded-2xl"
          onClick={() => {
            handleChoiceValidation();
          }}
        >
          <h2 className="text-ProductTitleSmall font-bold">
            {product.ProductName}
          </h2>
        </div>
      </div>

      <div className="flex justify-end">
        <FontAwesomeIcon className="text-textSmall" icon={faCircleInfo} />
      </div>
    </div>
  );
});
