//Importing React hooks
import { useContext } from "react";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import MomentUtils from "@date-io/moment";
import { ContactsInformationFunc } from "../Context Components/ContactsInformationContext";
import { padding } from "@mui/system";

export default function PageLeftSideStaticContacts() {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 14);

  const {
    contactInfoState,
    getContactInfoFuncs: {
      handleNameChange,
      handleLastNameChange,
      handleEmailChange,
      handlePhoneChange,
      handleStreetChange,
      handleHouseNumberChange,
      handlePostNumberChange,
      handleTownChange,
      handleNotesChange,
      handleDeliveryDateChange,
    },
    value,
    setValue,
  } = useContext(ContactsInformationFunc);

  const handleCalendar = (newValue) => {
    setValue(newValue);
    handleDeliveryDateChange();
  };
  return (
    <div className="w-full">
      <div className="block px-6 py-6 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md focus:outline-none">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="inline-block font-bold text-ProductTitleSmall">
              {product.productName}
              <br />
              {product.VariationName}
            </h2>
          </div>

          <div className="flex items-center">
            <button
              className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 -mr-2"
              onClick={() => {
                handleIncreaseProductAmount(product);
              }}
            >
              +
            </button>

            <h2 className="final-check-product-table-price text-ProductAmountIndex mt-1 mx-2">
              <b>{product.qty}</b>
            </h2>

            <button
              className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 mr-10"
              onClick={() => {
                handleReduceProductAmount(product);
              }}
            >
              -
            </button>

            <p className="text-right inline-block text-ProductTitleMedium font-extrabold">
              {(Number(product.Price) * Number(product.qty)).toFixed(2)}
              &nbsp;Dkk
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
