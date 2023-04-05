//Importing Material design and material design components
import Icon from "@mdi/react";
import { mdiTrashCanOutline, mdiAlphaICircleOutline } from "@mdi/js";

export default function ProductDisplayFinalCheckPage(props) {
  const {
    product,
    handleIncreaseProductAmount,
    handleReduceProductAmount,
    handleRemoveProduct,
  } = props;

  return (
   <> 
   <tr className="final-check-product-table-row-item">
      <td className="final-check-product-table-I-tag-field">
          <Icon path={mdiAlphaICircleOutline} size={1} />
        </td>
        <tr className="final-check-product-table-row">
        <td className="final-check-product-table-name-field text-ProductTitleSmall">
          {product.VariationName
            ? product.ProductName + " " + product.VariationName
            : product.ProductName}
        </td>
        </tr>
        <td className="final-check-product-table-total-field text-ProductTitleMedium">
          {product.Price} dkk
        </td>
        <td className="final-check-product-table-amount-field final-check-product-table-amount-field-flex">
          <button
            className="final-check-product-table-amount-btn"
            onClick={() => {
              handleIncreaseProductAmount(product);
            }}
          >
            +
          </button>
          <p className="final-check-product-table-price text-ProductAmountIndex">
            <b>{product.qty}</b>
          </p>
          <button
            className="final-check-product-table-amount-btn"
            onClick={() => {
              handleReduceProductAmount(product);
            }}
          >
            -
          </button>
        </td>
        <td className="final-check-product-table-delete-field">
          <Icon
            className="trash-icon"
            path={mdiTrashCanOutline}
            size={1}
            onClick={() => {
              handleRemoveProduct(product);
            }}
          />
        </td>
      </tr>
    </>
  );
}

