//Importing React hooks
import React, { useState, useEffect } from "react";

export default React.memo(function ProductSearchBar({ product, addProduct }) {
  const [productVariations, setProductVariations] = useState([]);
  const [productWithVar, setProductWithVar] = useState({});
  const [variationAndPrice, setVariationAndPrice] = useState([]);

  //Fetching the variations from the server
  //////
  ////
  //

  // useEffect(() => {
  //   const sendPostRequest = async () => {
  //     //Sending a POST request to the server with the product index
  //     await fetch("http://65.109.137.46:5000/apivar", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ProductIndex: product.ProductIndex,
  //       }),
  //     })
  //       //The server retreives a list of variations that match the product index
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.length > 0) {
  //           setProductVariations((prevList) => [...prevList, data]);
  //         }
  //       })
  //       .then(() => {})
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   sendPostRequest();

  //   productVariations.forEach((variation) => {
  //     const getPriceForEach = async () => {
  //       console.log(productVariations);
  //       console.log("ProductIndex:", product.ProductIndex);
  //       console.log("VariationID:", variation.VariationID);
  //       await fetch("http://65.109.137.46:5000/pyth", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         //Sends to the server the validated format of the product data
  //         body: JSON.stringify({
  //           ProductIndex: product.ProductIndex,
  //           VariationID: variation.VariationID,
  //           Amount: 1,
  //         }),
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           if (data !== null && data !== undefined) {
  //             const parsedData = JSON.parse(data);
  //             const variationAndPrice = {
  //               variationName: variation.name,
  //               VariationID: variation.variationID,
  //               ProductIndex: variation.ProductIndex,
  //               variationPrice: parsedData,
  //             };
  //             setVariationAndPrice((prevList) => [
  //               ...prevList,
  //               variationAndPrice,
  //             ]);
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };
  //     getPriceForEach();
  //   });
  // }, []);
  ///////////

  //The code I was using for getting variations and prices before 21.03
  //
  // useEffect(() => {
  //   const varPostRequest = async () => {
  //     try {
  //       const response = await fetch("http://65.109.137.46:5000/apivar", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           ProductIndex: product.ProductIndex,
  //         }),
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       if (data.length > 0) {
  //         const productVariations = [];
  //         console.log(data);
  //         for (const variation of data) {
  //           const response = await fetch("http://65.109.137.46:5000/pyth", {
  //             method: "POST",
  //             headers: {
  //               Accept: "application/json",
  //               "Content-Type": "application/json",
  //             },
  //             //Sends to the server the validated format of the product data
  //             body: JSON.stringify({
  //               ProductIndex: product.ProductIndex,
  //               VariationID: variation.VariationID,
  //               Amount: 1,
  //             }),
  //           });
  //           const parsedData = await response.json();
  //           if (parsedData !== null && parsedData !== undefined) {
  //             const variationAndPrice = {
  //               variationName: variation.ProductName,
  //               VariationID: variation.VariationID,
  //               ProductIndex: variation.ProductIndex,
  //               variationPrice: Number(parsedData),
  //             };
  //             productVariations.push(variationAndPrice);
  //             setVariationAndPrice((prev) => [...prev, productVariations]);
  //           }
  //         }
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   varPostRequest();
  // }, []);

  // useEffect(() => {
  //   const varPostRequest = async () => {
  //     try {
  //       const response = await fetch("http://65.109.137.46:5000/apivar", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           ProductIndex: product.ProductIndex,
  //         }),
  //       });
  //       const data = await response.json();
  //       console.log(data);
  //       if (data.length > 0) {
  //         console.log(data);
  //         const variationAndPrice = data.map(async (variation) => {
  //           const response = await fetch("http://65.109.137.46:5000/pyth", {
  //             method: "POST",
  //             headers: {
  //               Accept: "application/json",
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               ProductIndex: product.ProductIndex,
  //               VariationID: variation.VariationID,
  //               Amount: 1,
  //             }),
  //           });
  //           const parsedData = await response.json();
  //           if (parsedData !== null && parsedData !== undefined) {
  //             return {
  //               variationName: variation.ProductName,
  //               VariationID: variation.VariationID,
  //               ProductIndex: variation.ProductIndex,
  //               variationPrice: parsedData,
  //             };
  //           }
  //         });
  //         setVariationAndPrice(variationAndPrice.filter((v) => v !== null));
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   varPostRequest();
  // }, []);
  // console.log(variationAndPrice);
  //
  useEffect(() => {
    const varPostRequest = async () => {
      try {
        const response = await fetch("http://65.109.137.46:5000/apivar", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ProductIndex: product.ProductIndex,
          }),
        });
        const data = await response.json();
        if (data.length > 0) {
          const response = await fetch("http://65.109.137.46:5000/pyth", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ProductIndex: product.ProductIndex,
              Amount: 1,
            }),
          });
          const priceData = await response.json();
          console.log(priceData);
          if (priceData.length > 0) {
            const variationObject = data.map((variation, index) => {
              return {
                ProductIndex: variation.ProductIndex,
                VariationName: variation.ProductName,
                VariationID: variation.VariationID,
                VariationPrice: priceData[index],
              };
            });
            setVariationAndPrice(variationObject);
          }
        }
      } catch (err) {
        console.log(err);
      }
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
    if (!productWithVar.VariationName && variationAndPrice.length > 0) {
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
          {variationAndPrice.length !== 0
            ? variationAndPrice.map((variation) => (
                <option
                  key={variation.VariationID}
                  value={variation.VariationName}
                  data-variationid={variation.VariationID}
                  data-variationprice={variation.VariationPrice}
                >
                  {variation.VariationName}&nbsp; &nbsp; - &nbsp; &nbsp;
                  {variation.VariationPrice} DKK
                </option>
              ))
            : "Nothing to show"}
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
});
