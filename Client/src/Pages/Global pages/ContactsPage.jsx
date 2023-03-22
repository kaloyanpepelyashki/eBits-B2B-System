import ButtonsHolder from "../../Components/Global Components/ButtonsHolderComponent";
import PageLeftSideStaticContacts from "../../Components/Global Components/PageLeftSideStaticContacts";

export default function ContactInfoPage() {
  return (
    <>
      <main className="contact-info-page-main-content-wrapper page-main-section">
        <div className="contact-info-page-inner-content">
          <div className="contact-info-page-widgets-holder">
            <PageLeftSideStaticContacts />
          </div>
        </div>
        <ButtonsHolder />
      </main>
    </>
  );
}
