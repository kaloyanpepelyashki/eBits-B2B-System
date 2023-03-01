import PageLeftSide from "../../Components/Global Components/PageLeftSide";

export default function ProductSelectionPageSP({ productsList }) {
  return (
    <>
      <main className="product-selectionSP-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content">
          <PageLeftSide productsList={productsList} />
        </div>
      </main>
    </>
  );
}
