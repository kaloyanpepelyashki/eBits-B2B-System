//Importing Material design and material design components
import Icon from "@mdi/react";
import { mdiMinus } from "@mdi/js";

export default function ProductDisplayReceipt(props) {
  const { product } = props;
  return (
    <>
      <div className="product-display-receipt-wrapper">
        <div className="product-display-receipt-delete">
          <Icon path={mdiMinus} size={0.8} />
        </div>
        <div className="product-display-receipt-main-cont">
          <div className="product-display-receipt-name">
            <p className="text-VariationTitleSmall">
              {product.ProductName} / {product.VariationName}
            </p>
          </div>
          <div className="product-display-receipt-price">
            <p className="text-VariationTitle">{product.Price} dkk</p>
          </div>
        </div>
        <div className="product-display-receipt-amount">
          <p className="product-display-receipt-amount-index text-VariationTitle">
            x{product.qty}
          </p>
        </div>
      </div>
    </>
  );
}
