//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useNavigate } from "react-router";

//Importing Context components
import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";

//Importing components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSide from "../../Components/Global Components/PageLeftSide";
import SeparateProductsReceipt from "../../Components/Global Components/SeparateProductReceipt";
import ProcessMicroCopy from "../../Components/Global Components/MicroCopy";

export default function ProductSelectionPageSP({ productsList }) {
  const navigate = useNavigate();
  //Destructuring from the ShoppingCartFunc context
  const {
    cartProducts,
    funcs: { handlePageTransfer },
    globalPrices,
    setGlobalPrices,
  } = useContext(ShoppingCartFunc);

  cartProducts.filter((product) => product.qty !== 0);

  //Initiating the page transfer function
  const handleTransfer = () => {
    if (cartProducts.filter((product) => product.qty !== 0).length !== 0) {
      navigate("/contactInfoPage", {
        state: {
          contactsPageType: "separateProductsBuy",
        },
      });
    } else {
      window.alert("Please select a product");
    }
  };

  return (
    <>
      <main className="product-selectionSP-page-content-wrapper product-selection-page-content-wrapper page-main-section">
        <div className="product-selectionSP-page-inner-content product-selection-page-inner-content">
          <div className="product-selectionSP-page-widgets-holder page-widgets-holder">
            <div>
              <ProcessMicroCopy processStep={1} />
              <PageLeftSide
                globalPrices={globalPrices}
                setGlobalPrices={setGlobalPrices}
                productsList={productsList}
              ></PageLeftSide>
            </div>
            <SeparateProductsReceipt title={"Total"} />
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
