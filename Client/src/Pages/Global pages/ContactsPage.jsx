//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useLocation, useNavigate } from "react-router";

//Importing Context components
import { ContactsInformationFunc } from "../../Components/Context Components/ContactsInformationContext";
import { ShoppingCartFunc } from "../../Components/Context Components/ShoppingCartFuncContext";

//Importing Components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSideStaticContacts from "../../Components/Global Components/PageLeftSideStaticContacts";
import SeparateProductsReceipt from "../../Components/Global Components/SeparateProductReceipt";

export default function ContactInfoPage() {
  const { contactInfoState } = useContext(ContactsInformationFunc);
  const { globalPrices } = useContext(ShoppingCartFunc);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.contactsPageType);

  const handleTransfer = () => {
    if (
      contactInfoState.name &&
      contactInfoState.lastName &&
      contactInfoState.email &&
      contactInfoState.deliveryDate
    ) {
      //Navigating to next page
      //Sending the data to the next page using reacr Location
      navigate("/finalChackPage", {
        state: {
          name: contactInfoState.name,
          lastName: contactInfoState.lastName,
          email: contactInfoState.email,
          phone: contactInfoState.phone,
          street: contactInfoState.street,
          houseNumber: contactInfoState.houseNumber,
          postNumber: contactInfoState.postNumber,
          town: contactInfoState.town,
          deliveryDate: contactInfoState.deliveryDate,
          notes: contactInfoState.notes,
        },
      });
    } else {
      window.alert("fill out all fields");
    }
  };
  return (
    <>
      <main className="contact-info-page-main-content-wrapper page-main-section">
        <div className="contact-info-page-inner-content">
          <div className="contact-info-page-widgets-holder">
            <PageLeftSideStaticContacts />
            {location.state.contactsPageType === "separateProductsBuy" ? (
              <SeparateProductsReceipt globalPrices={globalPrices} />
            ) : (
              <h2>This is for kit</h2>
            )}
          </div>
        </div>
        <ButtonsHolder handleTransfer={handleTransfer} />
      </main>
    </>
  );
}
