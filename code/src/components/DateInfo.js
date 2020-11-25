import React, { useState } from 'react';
import DatePicker from 'react-datepicker'

export const DateInfo = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
      selected={startDate}
      onChange={date => setStartDate(date)} 
    />
  )
} 