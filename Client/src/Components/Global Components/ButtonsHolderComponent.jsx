import { useNavigate } from "react-router";

export default function ButtonsHolder({ nextDestination }) {
  const navigate = useNavigate();

  const handleTransfer = () => {
    navigate(nextDestination);
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
            className="btn-holder-next bg-primary-color text-GlobalBtnsTxt"
            onClick={handleTransfer}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
