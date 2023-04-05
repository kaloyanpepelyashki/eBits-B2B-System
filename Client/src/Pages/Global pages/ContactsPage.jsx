//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useLocation, useNavigate } from "react-router";

//Importing Context components
import { ContactsInformationFunc } from "../../Components/Context Components/ContactsInformationContext";

//Importing Components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import KitReceiptBottomSection from "../../Components/Global Components/KitBuyReceiptBottomSection";
import KitReceipt from "../../Components/Global Components/KitReceipt";
import PageLeftSideStaticContacts from "../../Components/Global Components/PageLeftSideStaticContacts";
import SeparateProductsReceipt from "../../Components/Global Components/SeparateProductReceipt";
import ProcessMicroCopy from "../../Components/Global Components/MicroCopy";

export default function ContactInfoPage() {
  const { contactInfoState } = useContext(ContactsInformationFunc);

  const navigate = useNavigate();
  const location = useLocation();

  const handleTransfer = () => {
    // if (
    // contactInfoState.name &&
    //   contactInfoState.lastName &&
    //   contactInfoState.email &&
    //   contactInfoState.deliveryDate;
    // ) {
    //   //Navigating to next page
    //   //Sending the data to the next page using reacr Location
    //   navigate("/finalChackPage", {
    //     state: {
    //       name: contactInfoState.name,
    //       lastName: contactInfoState.lastName,
    //       email: contactInfoState.email,
    //       phone: contactInfoState.phone,
    //       street: contactInfoState.street,
    //       houseNumber: contactInfoState.houseNumber,
    //       postNumber: contactInfoState.postNumber,
    //       town: contactInfoState.town,
    //       deliveryDate: contactInfoState.deliveryDate,
    //       notes: contactInfoState.notes,
    //       contactsPageType: "separateProductsBuy",
    //     },
    //   });
    // } else {
    //   window.alert("fill out all fields");
    // }

    // if (!contactInfoState.name) {
    //   window.alert("Please give us a name");
    // }

    // if (!contactInfoState.lastName) {
    //   window.alert("Please give us your last name");
    // }

    // if (!contactInfoState.email) {
    //   window.alert("Please give tell us your email");
    // }
    // if (!contactInfoState.phone) {
    //   window.alert("Please give tell us your phone number");
    // }
    // if (!contactInfoState.email.includes("@")) {
    //   window.alert("Please provide us with a valid email");
    // }
    // if (!contactInfoState.phone) {
    //   window.alert("Please give tell us your phone number");
    // }
    // if (
    //   !contactInfoState.name &&
    //   !contactInfoState.lastName &&
    //   !contactInfoState.email &&
    //   !contactInfoState.deliveryDate
    // ) {
    //   window.alert("Please fill out all fields");
    // } else {
    //   navigate("/finalChackPage", {
    //     state: {
    //       name: contactInfoState.name,
    //       lastName: contactInfoState.lastName,
    //       email: contactInfoState.email,
    //       phone: contactInfoState.phone,
    //       street: contactInfoState.street,
    //       houseNumber: contactInfoState.houseNumber,
    //       postNumber: contactInfoState.postNumber,
    //       town: contactInfoState.town,
    //       deliveryDate: contactInfoState.deliveryDate,
    //       notes: contactInfoState.notes,
    //       contactsPageType: "separateProductsBuy",
    //     },
    //   });
    // }

    Object.keys(contactInfoState).map((key) => {
      if (!contactInfoState[key] && contactInfoState[key].length <= 0) {
        window.alert(`Please provide us with ${key}`);
      } else {
        navigate("/finalChackPage", {
          state: {
            contactsPageType: location.state.contactsPageType,
          },
        });
      }
    });
  };

  return (
    <>
      <main className="contact-info-page-main-content-wrapper page-main-section">
        <div className="contact-info-page-inner-content">
          <div className="contact-info-page-widgets-holder">
            <div>
              <ProcessMicroCopy processStep={2} />
              <PageLeftSideStaticContacts />
            </div>
            {location.state.contactsPageType === "separateProductsBuy" ? (
              <SeparateProductsReceipt title={"Total"} />
            ) : (
              <KitReceipt>
                <KitReceiptBottomSection />
              </KitReceipt>
            )}
          </div>
        </div>
        <div className="buttons-holder-h">
        <ButtonsHolder handleTransfer={handleTransfer}/>
        </div>
      </main>
    </>
  );
}
