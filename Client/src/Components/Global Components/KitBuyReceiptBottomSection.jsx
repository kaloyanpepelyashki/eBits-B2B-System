//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

export default function KitReceiptBottomSection() {
  const { kitAmount, total } = useContext(ShoppingCartFunc);
  return (
    <>
      <h1 className="text-total text-TextMid text-primary-color">Total</h1>
      <div className="kit-receipt-bottom-price-details-holder">
        <p className="kit-price-details text-txt-grey-color text- ProductTitleMedium">
          {kitAmount != 0
            ? kitAmount + " " + " x " + " " + total.toFixed(2)
            : 0}
        </p>
        <p className="kit-price-details-total-price ReceiptPriceL text-TextBig text-primary-color -mb-6">
          {kitAmount != 0 ? kitAmount * total.toFixed(2) : 0} &nbsp; DKK
        </p>
      </div>
    </>
  );
}
