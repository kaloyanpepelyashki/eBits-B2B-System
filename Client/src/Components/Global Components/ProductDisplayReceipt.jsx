//Importing Material design and material design components
import Icon from "@mdi/react";
import { mdiMinus } from "@mdi/js";
import { grey } from "@mui/material/colors";

export default function ProductDisplayReceipt(props) {
  const { product, handleReduceProductAmount } = props;
  return (
    <>
      <div className="product-display-receipt-wrapper flex justify-start">

        <div className="product-display-receipt-delete">
          <Icon
            className="product-display-receipt-icon-minus"
            onClick={() => {
              handleReduceProductAmount(product);
            }}
            path={mdiMinus}
            size={1}
          />
        </div>
        
        <div className="product-display-receipt-main-cont">
          <div className="product-display-receipt-name">
            <p className="text-VariationTitleSmall">
              {product.ProductName}
              <br/> 
              {product.VariationName}
            </p>
          </div>
          <div className="product-display-receipt-price">
            <p className="text-VariationTitle">{product.Price} dkk</p>
          </div>
        </div>
        <div className="">
          <p className="text-VariationTitle font-bold block ml-2 px-2 py-1 bg-white border-white border-slate-300 rounded-sm shadow-md
            focus:outline-none relative">
            x{product.qty}
          </p>
        </div>
      </div>
    </>
  );
}
