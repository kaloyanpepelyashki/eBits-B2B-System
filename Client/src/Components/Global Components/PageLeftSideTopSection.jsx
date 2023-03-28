//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

export default function PageLeftTopSection() {
  const { setKitAmount } = useContext(ShoppingCartFunc);

  return (
    <>
      <div className="page-left-side-top-section">
        <h1 className="text-TextXL text-primary-color">Kit</h1>
        <div className="page-left-side-top-section-amount-window-holder">
          <p>Amount</p>
          <input
            type="number"
            onChange={(e) => {
              setKitAmount(e.target.value);
            }}
            className="kit-amount-window"
            min={1}
          />
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
