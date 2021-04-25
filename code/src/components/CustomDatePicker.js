import React from 'react'
import styled from 'styled-components'
import { DatePicker, DatePickerInput } from 'carbon-components-react'

//Styled components
const DatePickerWrapper = styled.div`
 @media (min-width: 998px) {
    margin-right: 40px;
 }
`

const CustomDatePicker = ({ onDateChange }) => {
  return (
    <DatePickerWrapper>
      <DatePicker 
        light 
        className="testing" 
        dateFormat="m/d/Y" 
        datePickerType="single" 
        onChange={(date) => onDateChange(date)}
      >
        <DatePickerInput
          hideLabel
          id="date-picker-default-id"
          className="testing-input"
          size="md"
          placeholder="due date"
          labelText="Due Date"
          type="text"
        />
      </DatePicker>
    </DatePickerWrapper>
  )
}

export default CustomDatePicker