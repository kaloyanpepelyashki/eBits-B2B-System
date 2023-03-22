//Importing React hooks
import { useReducer, useState } from "react";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs, { Dayjs } from "dayjs";
import MomentUtils from "@date-io/moment";

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_LASTNAME":
      return { ...state, lastName: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PHONE":
      return { ...state, phone: action.payload };
    case "UPDATE_STREET":
      return { ...state, street: action.payload };
    case "UPDATE_HOUSENUMBER":
      return { ...state, houseNumber: action.payload };
    case "UPDATE_POSTNUMBER":
      return { ...state, postNumber: action.payload };
    case "UPDATE_TOWN":
      return { ...state, town: action.payload };
    case "UPDATE_DELIVERYDATE":
      return { ...state, deliveryDate: action.payload };
    case "UPDATE_NOTES":
      return { ...state, notes: action.payload };
    default:
      return state;
  }
}

export default function PageLeftSideStaticContacts() {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 14);
  const day = todayDate.getDate();
  const month = todayDate.getMonth();
  const year = todayDate.getFullYear();
  const firstAvailableDate = `${year}-${month}-${day}`;

  const [value, setValue] = useState(dayjs(todayDate));

  const formInitialState = {
    name: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    houseNumber: "",
    postNumber: "",
    town: "",
    deliveryDate: "",
    notes: "",
  };

  console.log(todayDate);
  console.log(todayDate.getMonth());

  const [state, dispatch] = useReducer(reducer, formInitialState);

  const handleNameChange = (e) => {
    dispatch({ type: "UPDATE_NAME", payload: e.target.value });
  };

  const handleLastNameChange = (e) => {
    dispatch({ type: "UPDATE_LASTNAME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "UPDATE_EMAIL", payload: e.target.value });
  };

  const handlePhoneChange = (e) => {
    dispatch({ type: "UPDATE_PHONE", payload: e.target.value });
  };

  const handleStreetChange = (e) => {
    dispatch({ type: "UPDATE_STREET", payload: e.target.value });
  };

  const handleHouseNumberChange = (e) => {
    dispatch({ type: "UPDATE_HOUSENUMBER", payload: e.target.value });
  };

  const handlePostNumberChange = (e) => {
    dispatch({ type: "UPDATE_POSTNUMBER", payload: e.target.value });
  };

  const handleTownChange = (e) => {
    dispatch({ type: "UPDATE_TOWN", payload: e.target.value });
  };

  const handleNotesChange = (e) => {
    dispatch({ type: "UPDATE_NOTE", payload: e.target.value });
  };

  const handleDeliveryDateChange = (e) => {
    dispatch({
      type: "UPDATE_DELIVERYDATE",
      payload:
        e.target.options[e.target.selectedIndex].getAttribute("data-value"),
    });
  };

  console.log(state);
  console.log(value);
  return (
    <>
      <div className="page-left-side-contacts-wrapper">
        {/* <==== | LEFT COLUMN | ====>  */}
        <div className="page-left-side-contacts-column page-left-side-contacts-left-column">
          {/* <--- | PERSONAL CONTACT INFO | ---> */}
          <div className="personal-contact-info-block">
            <p className="contacts-page-heading text-primary-color  text-HeadingSmall">
              Contact Details
            </p>
            <input
              type="text"
              className="contacts-page-input-field"
              value={state.name}
              placeholder="Name"
              onChange={handleNameChange}
            />
            <input
              type="text"
              className="contacts-page-input-field"
              value={state.lastName}
              placeholder="Last name"
              onChange={handleLastNameChange}
            />
            <div className="contacts-page-small-inputs-holder">
              <input
                type="email"
                className="contacts-page-input-field-small"
                value={state.email}
                placeholder="Email"
                onChange={handleEmailChange}
              />
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                className="contacts-page-input-field-small"
                value={state.phone}
                placeholder="Phone"
                onChange={handlePhoneChange}
              />
            </div>
          </div>
          {/* <--- | ADDRESS INFO | ---> */}
          <div className="address-contact-info-block">
            <p className="contacts-page-heading text-primary-color  text-HeadingSmall">
              Address Details
            </p>
            <input
              type="text"
              className="contacts-page-input-field"
              value={state.street}
              placeholder="Street"
              onChange={handleStreetChange}
            />
            <input
              type="text"
              className="contacts-page-input-field"
              value={state.houseNumber}
              placeholder="House Number"
              onChange={handleHouseNumberChange}
            />
            <div className="contacts-page-small-inputs-holder">
              <input
                inputMode="numeric"
                pattern="[0-9]*"
                className="contacts-page-input-field-small"
                value={state.postNumber}
                placeholder="Post number"
                onChange={handlePostNumberChange}
              />
              <input
                type="text"
                className="contacts-page-input-field-small"
                value={state.town}
                placeholder="Town"
                onChange={handleTownChange}
              />
            </div>
          </div>
        </div>
        <div className="page-left-side-contacts-column page-left-side-contacts-right-column">
          <div className="delivery-date-info-block">
            <p className="contacts-page-heading text-primary-color  text-HeadingSmall">
              Delivery
            </p>

            <DateCalendar
              minDate={dayjs(todayDate)}
              displayWeekNumber
              value={value}
              data-value={state.deliveryDate}
              onChange={handleDeliveryDateChange}
            />
          </div>
          <div className="notes-info-block">
            <p className="contacts-page-heading text-primary-color  text-HeadingSmall">
              Notes
            </p>
            <textarea
              className="contacts-page-notes-txt-area"
              value={state.notes}
              placeholder="Something we should note...?"
              onChange={handleNotesChange}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
