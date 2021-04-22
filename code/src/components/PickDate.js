import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;


export const PickDate = ({ onChange, selected }) => {
  return (
    <DateContainer>
      <Label>Set due date:</Label>
      <DatePicker 
        onChange={onChange} 
        selected={selected} 
        dateFormat="yyyy/MM/dd"
        className="datepicker"
        popperModifiers={{
            preventOverflow: {
              enabled: true,
              boundariesElement: 'viewport',
            }}}
        withPortal
      />
    </DateContainer>
  )
};