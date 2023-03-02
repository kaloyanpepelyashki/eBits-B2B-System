export default function ProductSearchBar({ product, addProduct }) {
  return (
    <>
      <div
        className="product-search-bar-outter-wrapper"
        onClick={() => {
          addProduct(product);
        }}
      >
        <h2>{product.ProductName}</h2>
      </div>
    </>
  );
}
