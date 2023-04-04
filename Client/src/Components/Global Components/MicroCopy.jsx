export default function ProcessMicroCopy(props) {
  const { processStep } = props;
  return (
    <>
      <div className="process-micro-copy-holder">
        <p className="process-micro-copy-text mr-2 text-txt-black-color text-TextSmall">
          Choose Products
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextXL"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextXL"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 2
              ? "process-micro-copy-text mr-2 text-txt-black-color text-TextSmall"
              : "process-micro-copy-text mr-2 text-txt-grey-color text-TextSmall "
          }
        >
          Contact Info
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextXL"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextXL"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 3
              ? "process-micro-copy-text mr-2 text-txt-black-color text-TextSmall"
              : "process-micro-copy-text mr-2 text-txt-grey-color text-TextSmall "
          }
        >
          Final Check
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-arrow mr-2 text-txt-black-color text-TextXL"
              : "process-micro-copy-arrow mr-2 text-txt-grey-color text-TextXL"
          }
        >
          &gt;
        </p>
        <p
          className={
            processStep >= 4
              ? "process-micro-copy-text mr-2 text-txt-black-color text-TextSmall"
              : "process-micro-copy-text mr-2 text-txt-grey-color text-TextSmall "
          }
        >
          Finish
        </p>
      </div>
    </>
  );
}
