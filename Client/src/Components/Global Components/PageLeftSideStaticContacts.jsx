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

            <input
              type="text"
              className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
              focus:outline-none"
              value={contactInfoState.street}
              placeholder="Street"
              onChange={handleStreetChange}
            />
            <input
              type="text"
              className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
              focus:outline-none"
              value={contactInfoState.houseNumber}
              placeholder="House Number"
              onChange={handleHouseNumberChange}
            />
            <div className="contacts-page-small-inputs-holder ">
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                className="contacts-page-input-field-small pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
                focus:outline-none"
                value={contactInfoState.postNumber}
                placeholder="Post number"
                onChange={handlePostNumberChange}
              />
              <input
                type="text"
                className="contacts-page-input-field-small ml-4 pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
                focus:outline-none"
                value={contactInfoState.town}
                placeholder="Town"
                onChange={handleTownChange}
              />
            </div>
          </div>
        </div>

        <div className="page-left-side-contacts-column page-left-side-contacts-right-column">
        <p className="contacts-page-heading text-primary-color text-HeadingSmall -mb-4">
        Delivery
        </p>
          <div className="delivery-date-info-block bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl
            focus:outline-none" style={{ height: '320px', width: '300px' }}>

            <DateCalendar
              style={{ height: '320px', width: '300px', }}
              minDate={dayjs(todayDate)}
              displayWeekNumber={false}
              value={value}
              data-value={contactInfoState.deliveryDate}
              onChange={(newValue) => handleCalendar(newValue)}
            />

          </div>
          <div className="notes-info-block">
            <p className="contacts-page-heading text-primary-color text-HeadingSmall -mb-1 mt-1">
              Notes
            </p>
            <textarea
              className="contacts-page-notes-txt-area pl-2 px-20 py-2 bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl
              focus:outline-none"
              value={contactInfoState.notes}
              placeholder="Something we should note...?"
              onChange={handleNotesChange}
            ></textarea>

          </div>
        </div>
      </div>
    </div>
  );
}
