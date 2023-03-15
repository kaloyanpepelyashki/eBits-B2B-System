export default function SeparateProductsReceipt(props) {
  const { globalPrices } = props;
  return (
    <>
      <div className="receipt-holder">
        <h1>Total</h1>
        <p className="text-ReceiptPriceL">{globalPrices}</p>
      </div>
    </>
  );
}
