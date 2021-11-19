import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components/macro";

import "react-datepicker/dist/react-datepicker.css";
const { DateTime } = require("luxon");

const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
    font-family: "rubik";
  }
  .react-datepicker__input-container input {
    font-family: "rubik";
  }
`;

const AddDate = ({ setNewDate, newDate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setNewDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <label>
        Deadline
        {/* det finns en version som är som en knapp så att den inte fokuserar direkt på den i telefonen */}
      </label>
      <button className="example-custom-input" onClick={handleClick}>
        {DateTime.fromJSDate(newDate)
          .setZone("Europe/Stockholm")
          .toFormat("dd LLL yyyy")}
      </button>
      {isOpen && (
        <DatePicker
          selected={newDate}
          onChange={handleChange}
          inline
        />
      )}
    </Wrapper>
  );
};

export default AddDate;
