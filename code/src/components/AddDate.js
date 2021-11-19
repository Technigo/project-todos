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

const AddDate = ({ setNewDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Wrapper>
      <label>
        Deadline
        {/* det finns en version som är som en knapp så att den inte fokuserar direkt på den i telefonen */}
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            setNewDate(
              DateTime.fromJSDate(date).toFormat("dd LLL yyyy")
            );
          }}
        />
      </label>
    </Wrapper>
  );
};

export default AddDate;
