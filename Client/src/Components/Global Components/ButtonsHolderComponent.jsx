//Importing React-router elements and components
import { useNavigate } from "react-router";

export default function ButtonsHolder({ handleTransfer }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="buttons-holder">
        <div className="buttons-holder-inner">
          <button
            className="btn-holder-back text-GlobalBtnsTxt"
            onClick={() => navigate(-1)}
          >
            &lt; Back
          </button>
          <button
            className="btn-holder-next bg-primary-color text-GlobalBtnsTxt text-txt-white-color"
            onClick={handleTransfer}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
