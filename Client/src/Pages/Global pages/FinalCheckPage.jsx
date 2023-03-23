import { useLocation } from "react-router";
import PageLeftSideFinalCheckPage from "../../Components/Global Components/PageLeftSideFinalCheckPage";

export default function FinalCheckPage() {
  const location = useLocation();

  console.log(location.contactInfoState);

  const cardData = sessionStorage.getItem("cartProducts");

  console.log(JSON.parse(cardData));
  return (
    <>
      <main className="final-check-page-content-wrapper page-main-section">
        <div className="final-check-page-inner-content page-inner-content">
          <div className="final-check-page-widgets-holder page-widgets-holder">
            <PageLeftSideFinalCheckPage />
          </div>
        </div>
      </main>
    </>
  );
}
