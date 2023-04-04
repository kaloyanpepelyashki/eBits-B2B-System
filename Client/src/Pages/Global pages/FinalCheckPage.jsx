//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useLocation } from "react-router";

import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";
import { ContactsInformationFunc } from "../../Components/Context Components/ContactsInformationContext";

//Importing components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSideFinalCheckPage from "../../Components/Global Components/PageLeftSideFinalCheckPage";

import axios from "axios";
import KitReceipt from "../../Components/Global Components/KitReceipt";
import KitReceiptBottomSection from "../../Components/Global Components/KitBuyReceiptBottomSection";
import SeparateProductsReceipt from "../../Components/Global Components/SeparateProductReceipt";

export default function FinalCheckPage(props) {
  const location = useLocation();

  const { productList } = props;

  const { cartProducts } = useContext(ShoppingCartFunc);

  const { contactInfoState } = useContext(ContactsInformationFunc);

  // const sendQuery = () => {
  //   axios
  //     //Makes a post request to the mailer server
  //     .post(
  //       "http://localhost:5000/querymailer",
  //       {
  //         emailAddress: contactInfoState.email,
  //         name: contactInfoState.name,
  //         lastName: contactInfoState.lastName,
  //       },
  //       { headers: { "Content-Type": "application/json" } }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  console.log(location.state.contactsPageType);
  return (
    <>
      <main className="final-check-page-content-wrapper page-main-section">
        <div className="final-check-page-inner-content page-inner-content">
          <div className="final-check-page-widgets-holder page-widgets-holder">
            <PageLeftSideFinalCheckPage
              productList={productList}
              cartProducts={cartProducts}
            />
            {location.state.contactsPageType === "separateProductsBuy" ? (
              <SeparateProductsReceipt />
            ) : (
              <KitReceipt>
                <KitReceiptBottomSection />
              </KitReceipt>
            )}
          </div>
        </div>
        <ButtonsHolder />
      </main>
    </>
  );
}
