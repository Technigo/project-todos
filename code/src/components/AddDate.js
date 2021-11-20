import React from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components/macro";

import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div`
  .react-datepicker {
    box-shadow: 3px 2px 11px rgb(0 0 0 / 30%);
    font-family: "rubik";
    position: relative;
  }
  .react-datepicker__input-container input {
    font-family: "rubik";
    height: 34px;
    border: rgb(204, 204, 204) solid 1px;
  }
`;

const AddDate = ({ setNewDate, newDate }) => {
  return (
    <label>
      Deadline (optional)
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
