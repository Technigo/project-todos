import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components/macro";

import "react-datepicker/dist/react-datepicker.css";
const { DateTime } = require("luxon");

const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
    font-family: "rubik";
    position: relative;
  }
  .react-datepicker__input-container input {
    font-family: "rubik";
  }
`;

const AddDate = ({ setNewDate, newDate }) => {
  return (
    <label>
      Deadline
      <Wrapper>
        <DatePicker
          selected={newDate}
          onChange={(date) => setNewDate(date)}
        />
      </Wrapper>
    </label>
  );
};

export default AddDate;
