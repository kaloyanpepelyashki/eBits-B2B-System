export default function SeparateProductsReceipt(props) {
  const { globalPrices } = props;
  return (
    <>
      <div className="receipt-holder block px-6 py-6 pb-56 bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
            focus:outline-none relative">
        <h1 className="text-total text-TextMid text-primary-color">Total</h1>
        <p className="ReceiptPriceL text-TextBig text-primary-color -mb-6">{globalPrices / 2}</p>
        <p className="text-primary-color text-ProductTitleSmall mr-44">Ex VAT</p>
        <div className="line line-3 mt-1.5"></div>
        <h1 className="text-cardText text-primary-color mt-4 mr-36">Products:</h1>
      </div>
    </>
  );
}
