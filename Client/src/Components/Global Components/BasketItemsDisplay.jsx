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

  //Validates the product data forma
  //If there is a variation in the product object
  const productFormatValidation = product.VariationID
    ? //Sends the data + the VariationID
      JSON.stringify({
        ProductIndex: product.product.ProductIndex,
        VariationID: product.VariationID,
        Amount: product.qty,
      })
    : //If there is no variation
      //Sends the data without a VariationID
      JSON.stringify({
        ProductIndex: product.product.ProductIndex,
        Amount: product.qty,
      });

  useEffect(() => {
    const sendPostRequestPrice = async () => {
      //Sending a POST request to the server with the product price
      await fetch("http://65.109.137.46:5000/pyth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //Sends to the server the validated format of the product data
        body: productFormatValidation,
      })
        //The server retreives a price that match the criteria
        .then((response) => response.json())
        .then((data) => {
          if (data !== null && data !== undefined) {
            const parsedData = JSON.parse(data);
            setProductPrice(parsedData);
            //Checking if the globalPrices variable is equal to 0
            if (globalPrices < 0) {
              //If it is equal to 0, then it just sets the value
              setGlobalPrices(Number(parsedData.toFixed(2)));
            } else {
              //If it is not equal to 0, then it adds the new price to the old value
              setGlobalPrices((prevPrice) => {
                return Number(
                  (prevPrice + Number(parsedData.toFixed(2))).toFixed(2)
                );
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
          console.error(err);
        });
    };
    sendPostRequestPrice();
  }, [product]);

  console.log(productPrice);
  return (
    <>
      <div style={{ display: "flex" }}>
        <h2>
          {product.productName} / {product.VariationName}
        </h2>
        <button
          style={{
            width: "33px",
            marginLeft: "10px",
            border: "1px solid black",
            padding: "5px 10px",
          }}
          onClick={() => {
            handleIncreaseProductAmount(product);
          }}
        >
          +
        </button>
        <h2 style={{ marginLeft: "10px" }}>
          <b>{product.qty}</b>
        </h2>
        <button
          style={{
            width: "33px",
            marginLeft: "10px",
            border: "1px solid black",
            padding: "5px 10px",
          }}
          onClick={() => {
            handleReduceProductAmount(product);
          }}
        >
          -
        </button>
        <button
          style={{ marginLeft: "10px", border: "1px solid black" }}
          onClick={() => {
            handleRemoveProduct(product);
          }}
        >
          Remove
        </button>
        <p>{productPrice}</p>
      </div>
    </>
  );
}
