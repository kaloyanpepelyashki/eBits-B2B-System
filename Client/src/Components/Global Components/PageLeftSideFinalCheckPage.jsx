//Importin React hooks
import { useContext, useState } from "react";

import Icon from "@mdi/react";
import { mdiPlus, mdiClose } from "@mdi/js";

import { ShoppingCartFunc } from "../Context Components/ShoppingCartFuncContext";
import ProductDisplayFinalCheckPage from "../Small Components/ProductDisplayFinalCheckPage";
import PopUpMessage from "../Small Components/FinalCheckPagePop-up";

export default function PageLeftSideFinalCheckPage(props) {
  const { cartProducts, productList } = props;
  const {
    funcs: {
      addProduct,
      reduceProductAmount,
      increaseProductAmount,
      removeProduct,
    },
  } = useContext(ShoppingCartFunc);

  const [toggleUp, setToggleUp] = useState(false);

  const handleAddProduct = (product) => {
    addProduct(product);
  };
  const handleRemoveProduct = (product) => {
    removeProduct(product);
  };
  const handleReduceProductAmount = (product) => {
    reduceProductAmount(product);
  };
  const handleIncreaseProductAmount = (product) => {
    increaseProductAmount(product);
  };
  return (
    <>
      <PopUpMessage
        productList={productList}
        handleAddProduct={handleAddProduct}
        toggleUp={toggleUp}
        setToggleUp={setToggleUp}
      >
        <Icon
          onClick={() => {
            setToggleUp(false);
          }}
          path={mdiClose}
          size={1.5}
        />
      </PopUpMessage>
      <div className="page-left-side-wrapper">
        <div className="page-left-side-contacts-main-content">
          <div className="page-left-side-contacts-top-section">
            <p className="page-left-side-contacts-top-section-heading">
              Last check if this is everything...
            </p>
            <div className="page-left-side-contacts-add-more-holder">
              <Icon
                onClick={() => {
                  setToggleUp(true);
                }}
                path={mdiPlus}
                size={1}
              />
              <p>Add more</p>
            </div>
          </div>
          <div className="products-holder-section">
            <div className="final-check-products-table-holder">
              <table className="final-check-product-table">
                <tr className="final-check-product-table-head">
                  <th className="final-check-product-table-I-tag-field"></th>
                  <th className="final-check-product-table-name-field">Name</th>
                  <th className="final-check-product-table-total-field">
                    Total
                  </th>
                  <th className="final-check-product-table-amount-field">
                    Amount
                  </th>
                  <th className="final-check-product-table-delete-field"></th>
                </tr>
                {cartProducts.map((product) =>
                  product.qty > 0 && product.varQty > 0 ? (
                    <ProductDisplayFinalCheckPage
                      key={product.productBaksetUnqKey}
                      product={product}
                      handleIncreaseProductAmount={handleIncreaseProductAmount}
                      handleReduceProductAmount={handleReduceProductAmount}
                      handleRemoveProduct={handleRemoveProduct}
                    />
                  ) : (
                    ""
                  )
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
