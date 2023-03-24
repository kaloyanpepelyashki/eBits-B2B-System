import { useContext } from "react";
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

export default function PageLeftSideFinalCheckPage(props) {
  const { cartProducts } = props;
  const {
    funcs: { reduceProductAmount, increaseProductAmount, removeProduct },
  } = useContext(ShoppingCartFunc);

  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };
  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };
  const handleIncreaseProductAmount = (product) => {
    increaseProductAmount(product);
  };
  return (
    <>
      <div className="page-left-side-wrapper">
        <div className="page-left-side-contacts-main-content">
          <div className="products-holder-section">
            <div className="final-check-products-table-holder">
              <table className="final-check-product-table">
                <th className="final-check-product-table-head">
                  <td className="final-check-product-table-I-tag-field"></td>
                  <td className="final-check-product-table-name-field">Name</td>
                  <td className="final-check-product-table-total-field">
                    Total
                  </td>
                  <td className="final-check-product-table-amount-field">
                    Amount
                  </td>
                  <td className="final-check-product-table-delete-field"></td>
                </th>
                {cartProducts.map((product) => (
                  <tr>
                    <td className="final-check-product-table-I-tag-field"></td>
                    <td className="final-check-product-table-name-field">
                      {product.ProductName}
                    </td>
                    <td className="final-check-product-table-total-field">
                      <button
                        style={{
                          width: "23px",
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
                      <p style={{ marginLeft: "10px" }}>
                        <b>{product.qty}</b>
                      </p>
                      <button
                        style={{
                          width: "23px",
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
                    </td>
                    <td className="final-check-product-table-amount-field">
                      Amount
                    </td>
                    <td className="final-check-product-table-delete-field"></td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
