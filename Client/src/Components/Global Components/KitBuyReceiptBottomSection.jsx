//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

export default function KitReceiptBottomSection() {
  const { kitAmount, total } = useContext(ShoppingCartFunc);
  return (
    <>
     <div className="flex justify-center">
      <h1 className="text-total text-TextMid text-primary-color">Total</h1>
      </div>
      <div className="kit-receipt-bottom-price-details-holder mx-16 text-TextSmall">
        <p className="kit-price-details text-txt-grey-color text- ProductTitleMedium">
          {kitAmount != 0 ? `${kitAmount}  x  ${total.toFixed(2)}` : 0}
        </p>
        </div>
        <div className="flex justify-center ml-14">
        <p className="kit-price-details-total-price ReceiptPriceL text-TextBig text-primary-color -mb-6">
          {kitAmount != 0 ? (kitAmount * total).toFixed(2) : 0}
        </p>
        <p className="text-primary-color font-bold text-ProductTitleSmall mx-8
                   px-4 py-2 bg-white border-white border-slate-300 rounded-xl
                  shadow-xl focus:outline-none ml-4">
            DKK.
          </p>
        </div>
    </>
  );
}
