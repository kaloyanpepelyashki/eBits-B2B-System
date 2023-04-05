//Importin React hooks
import { useContext } from "react";

//Importing React-router elements and components
import { useLocation, useNavigate } from "react-router";
import ButtonsHolder from "../../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSideKC from "../../../Components/Small Components/PageLeftSideStaticContactKC";
import SeparateProductsReceipt from "../../../Components/Global Components/SeparateProductReceipt";

export default function ContactsPageKC() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTransfer = () => {
    navigate("/finalChackPage", {
      state: {
        contactsPageType: location.state.contactsPageType,
      },
    });
  };
  return (
    <>
      <main className="contact-info-page-main-content-wrapper page-main-section">
        <div className="contact-info-page-inner-content">
          <div className="contact-info-page-widgets-holder">
            <PageLeftSideKC />
            <SeparateProductsReceipt title={"Kit"} />
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
