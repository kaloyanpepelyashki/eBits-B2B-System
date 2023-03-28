//Importing React hooks
import { useContext } from "react";

//Importing Context components
import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";

import ProductDisplayReceipt from "./ProductDisplayReceipt";

export default function SeparateProductsReceipt(props) {
  const { globalPrices } = props;
  const {
    cartProducts,
    funcs: { reduceProductAmount },
  } = useContext(ShoppingCartFunc);

  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };

  let total = 0;
  cartProducts.map((product) => (total = total + product.qty * product.Price));
  console.log(total);
  return (
    <>
      <div
        className="separate-product-receipt-wrapper block px-4 py-6 pb-56 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
            focus:outline-none relative"
      >
        <h1 className="text-total text-TextMid text-primary-color">Total</h1>
        <p className="ReceiptPriceL text-TextBig text-primary-color -mb-6">
          {total}
        </p>
        <p className="text-primary-color font-bold text-ProductTitleSmall mr-56">
          Ex VAT
        </p>
        <div className="line line-3 mt-1.5"></div>
        <div className="product-receipt-products-display-section">
          <h1 className="text-cardText font-bold text-primary-color mt-8 mb-2 mr-40">
            Products:
          </h1>
          <div className="seprate-products-receipt-products-holder">
            {cartProducts.map((product) =>
              product.qty && product.variationQty !== 0 ? (
                <ProductDisplayReceipt
                  key={product.productBaksetUnqKey}
                  product={product}
                  handleReduceProductAmount={handleReduceProductAmount}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
