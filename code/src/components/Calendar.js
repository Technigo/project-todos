import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [todayDate, setTodayDate] = useState(new Date());

  return (
    <DatePicker selected={todayDate} onChange={(date) => setTodayDate(date)} />
  );
}

export default Calendar;