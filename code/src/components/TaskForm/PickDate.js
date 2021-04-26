import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { DateContainer, Label } from "../../styledcomponents/StyledTaskForm";


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