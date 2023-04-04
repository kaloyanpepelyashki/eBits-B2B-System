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

export default function ProductSelectionPageKB({ productsList }) {
  const navigate = useNavigate();
  const { cartProducts, globalPrices, setGlobalPrices } =
    useContext(ShoppingCartFunc);

  const handleTransfer = () => {
    if (cartProducts.filter((product) => product.qty !== 0).length !== 0) {
      navigate("/contactInfoPage", {
        state: {
          contactsPageType: "kitBuy",
        },
      });
    } else {
      window.alert("Please select a product");
    }
  };
  return (
    <>
      <main className="product-selectionKB-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionKB-page-inner-content product-selection-page-inner-content">
          <div className="product-selectionSP-page-widgets-holder page-widgets-holder">
            <PageLeftSide
              globalPrices={globalPrices}
              setGlobalPrices={setGlobalPrices}
              productsList={productsList}
            >
              <PageLeftTopSection />
            </PageLeftSide>
            <KitReceipt>
              <KitReceiptBottomSection />
            </KitReceipt>
          </div>
        </div>
        <ButtonsHolder handleTransfer={handleTransfer} className="buttons-holder-h"/>
      </main>
    </>
  );
}
