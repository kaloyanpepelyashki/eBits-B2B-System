//Importing React hooks
import { useReducer, useState, useContext } from "react";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import MomentUtils from "@date-io/moment";
import { ContactsInformationFunc } from "../Context Components/ContactsInformationContext";
import { padding } from "@mui/system";

export default function PageLeftSideStaticContacts() {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 14);

  const {
    reducer,
    formInitialState,
    contactInfoState,
    dispatch,
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
    <>
      <div
        className="page-left-side-contacts-wrapper bg-white border-white border-slate-300 rounded-sm text-sm shadow-2xl
            focus:outline-none">

        {/* <==== | LEFT COLUMN | ====>  */}
        <div className="page-left-side-contacts-column page-left-side-contacts-left-column">
          {/* <--- | PERSONAL CONTACT INFO | ---> */}
          <div className="personal-contact-info-block">
            <p className="contacts-page-heading text-primary-color text-HeadingSmall">
              Contact Details
            </p>

            <input
              type="email"
              className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
              focus:outline-none"
              value={contactInfoState.email}
              placeholder="Email"
              onChange={handleEmailChange}
            />

            <input
              inputMode="numeric"
              pattern="[0-9]*"
              type="text"
              className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
              focus:outline-none"
              value={contactInfoState.phone}
              placeholder="Phone"
              onChange={handlePhoneChange}
            />
            <div className="contacts-page-small-inputs-holder">
              <input
                type="text"
                className="contacts-page-input-field-small pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
                focus:outline-none"
                value={contactInfoState.name}
                placeholder="Name"
                onChange={handleNameChange}
              />
              <input
                type="text"
                className="contacts-page-input-field-small ml-4 pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
                focus:outline-none"
                value={contactInfoState.lastName}
                placeholder="Last Name"
                onChange={handleLastNameChange}
              />
              
            </div>
          </div>

          {/* <--- | ADDRESS INFO | ---> */}
          <div className="address-contact-info-block">
            <p className="contacts-page-heading text-primary-color text-HeadingSmall">
              Address Details
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
              style={{ height: '320px', width: '300px' }}
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
    </>
  );
}
