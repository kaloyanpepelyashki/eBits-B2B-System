//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useNavigate } from "react-router";

import { ContactsInformationFunc } from "../../Components/Context Components/ContactsInformationContext";

//Importing Components
import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSideStaticContacts from "../../Components/Global Components/PageLeftSideStaticContacts";

export default function ContactInfoPage() {
  const { contactInfoState } = useContext(ContactsInformationFunc);
  const navigate = useNavigate();

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
          </div>
        </div>
        <ButtonsHolder handleTransfer={handleTransfer} />
      </main>
    </>
  );
}
