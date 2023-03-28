import { useEffect, useState } from "react";

export default function BasketProductsDisplay(props) {
  const [productPrice, setProductPrice] = useState(0);
  const {
    product,
    handleIncreaseProductAmount,
    handleReduceProductAmount,
    handleRemoveProduct,
    globalPrices,
    setGlobalPrices,
  } = props;

  // //Validates the product data forma
  // //If there is a variation in the product object
  // const productFormatValidation = product.VariationID
  //   ? //Sends the data + the VariationID
  //     JSON.stringify({
  //       ProductIndex: product.ProductIndex,
  //       VariationID: product.VariationID,
  //       Amount: product.qty,
  //     })
  //   : //If there is no variation
  //     //Sends the data without a VariationID
  //     JSON.stringify({
  //       ProductIndex: product.product.ProductIndex,
  //       Amount: product.qty,
  //     });

  // useEffect(() => {
  //   const sendPostRequestPrice = async () => {
  //     //Sending a POST request to the server with the product price
  //     await fetch("http://65.109.137.46:5000/pyth", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       //Sends to the server the validated format of the product data
  //       body: productFormatValidation,
  //     })
  //       //The server retreives a price that match the criteria
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data !== null && data !== undefined) {
  //           const parsedData = JSON.parse(data);
  //           setProductPrice(parsedData);
  //           //Checking if the globalPrices variable is equal to 0
  //           if (globalPrices < 0) {
  //             //If it is equal to 0, then it just sets the value
  //             setGlobalPrices(Number(parsedData.toFixed(2)));
  //           } else {
  //             //If it is not equal to 0, then it adds the new price to the old value
  //             setGlobalPrices((prevPrice) => {
  //               return Number(
  //                 (prevPrice + Number(parsedData.toFixed(2))).toFixed(2)
  //               );
  //             });
  //           }
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         console.error(err);
  //       });
  //   };
  //   sendPostRequestPrice();
  // }, [product]);

  useEffect(() => {
    setGlobalPrices((prevPrice) => {
      return Number(
        prevPrice +
          Number((Number(product.Price) * Number(product.qty)).toFixed(2))
      );
    });
  }, [product.qty, product.price]);

  console.log(productPrice);
  return (
    <>
      <div
        className="block px-6 py-6 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
            focus:outline-none"
      >
        <h2 className="inline-block font-bold text-ProductTitleSmall">
          {product.productName}
          <br />
          {product.VariationName}
        </h2>

        <button
          className="inline-block ProductTitleMedium ml-12 mr-2"
          onClick={() => {
            handleIncreaseProductAmount(product);
          }}
        >
          +
        </button>

        <h2 className="inline-block mr-2">
          <b>{product.qty}</b>
        </h2>
        <button
          className="inline-block"
          onClick={() => {
            handleReduceProductAmount(product);
          }}
        >
          -
        </button>
        <p className="inline-block ml-5 text-ProductTitleMedium font-extrabold">
          {(Number(product.Price) * Number(product.qty)).toFixed(2)} Dkk
        </p>
      </div>
    </>
  );
}
