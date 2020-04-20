import React, { useState } from 'react'
import DatePicker from "react-datepicker";
require('react-datepicker/dist/react-datepicker.css')

export const TimeRange = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      isClearable
      placeholderText="I have been cleared!"
    />
  );
}