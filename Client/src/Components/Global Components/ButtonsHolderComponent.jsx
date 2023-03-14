//Importing React-router elements, components and hooks
import { useNavigate } from "react-router";

export default function ButtonsHolder({ nextDestination, transferFunc }) {
  const navigate = useNavigate();
  const NextDestination = nextDestination;

  const handleTransfer = () => {
    transferFunc(NextDestination);
  };
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
            type="button"
            onClick={() => handleTransfer()}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
