//Importing React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useNavigate } from "react-router";

//Importing Context components
import { ShoppingCartFunc } from "../../../Components/Context Components/ShoppingCartFuncContext";

//Importing Components
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import KitReceiptBottomSection from "../../../Components/Global Components/KitBuyReceiptBottomSection";
import KitReceipt from "../../../Components/Global Components/KitReceipt";
import PageLeftSide from "../../../Components/Global Components/PageLeftSide";
import PageLeftTopSection from "../../../Components/Global Components/PageLeftSideTopSection";
import AmountPicker from "../../../Components/Small Components/AtomicComponents/AmountPicker";
import ProcessMicroCopy from "../../../Components/Global Components/MicroCopy";

export default function ProductSelectionPageKB({ productsList }) {
  const navigate = useNavigate();
  const { cartProducts, kitAmount } = useContext(ShoppingCartFunc);

  const handleTransfer = () => {
    if (cartProducts.filter((product) => product.qty !== 0).length !== 0) {
      navigate("/contactInfoPage", {
        state: {
          contactsPageType: "kitBuy",
        },
      });
    }
    if (kitAmount <= 0) {
      window.alert("Kit Amount cannot be 0");
    }
    if (cartProducts.filter((product) => product.qty !== 0).length == 0) {
      window.alert("Please add products to the basket");
    }
  };
  return (
    <>
      <main className="product-selectionKB-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKB-page-inner-content product-selection-page-inner-content">
          <div className="product-selectionSP-page-widgets-holder page-widgets-holder">
            <div>
              <ProcessMicroCopy processStep={1} />
              <PageLeftSide productsList={productsList}>
                <PageLeftTopSection>
                  <AmountPicker />
                </PageLeftTopSection>
              </PageLeftSide>
            </div>
            <KitReceipt>
              <KitReceiptBottomSection />
            </KitReceipt>
          </div>
        </div>
        <div className="buttons-holder-h">
          <ButtonsHolder
            back={"Yes"}
            title={"Next"}
            handleTransfer={handleTransfer}
          />
        </div>
      </main>
    </>
  );
}
