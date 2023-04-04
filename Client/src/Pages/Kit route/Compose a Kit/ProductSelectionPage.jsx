//Importing components
import { useContext } from "react";

//Importing React-router elements and components
import { useNavigate } from "react-router";

//Importing Context components
import { ShoppingCartFunc } from "../../../Components/Context Components/ShoppingCartFuncContext";

//Importing Components
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../../Components/Global Components/PageLeftSide";
import PageLeftTopSection from "../../../Components/Global Components/PageLeftSideTopSection";
import SeparateProductsReceipt from "../../../Components/Global Components/SeparateProductReceipt";

export default function ProductSelectionPageKC(props) {
  const navigate = useNavigate();
  const { cartProducts } = useContext(ShoppingCartFunc);

  const { productsList } = props;

  const handleTransfer = () => {
    if (cartProducts.filter((product) => product.qty !== 0).length !== 0) {
      navigate("/contactInfoCreatedKit", {
        state: {
          contactsPageType: "kitCreate",
        },
      });
    } else {
      window.alert("Please select a product");
    }
  };
  return (
    <>
      <main className="product-selectionKC-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKC-page-inner-content product-selection-page-inner-content">
          <div className="product-selectionKC-page-widgets-holder page-widgets-holder">
            <PageLeftSide productsList={productsList}>
              <PageLeftTopSection />
            </PageLeftSide>
            <SeparateProductsReceipt title={"Kit"} />
          </div>
          <ButtonsHolder handleTransfer={handleTransfer} />
        </div>
      </main>
    </>
  );
}
