import React, { useState } from 'react';
// import styled from 'styled-components'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [todayDate, setTodayDate] = useState(new Date());

  return (
    <h3> Today is a new day ☘️
      <DatePicker selected={todayDate} onChange={(date) => setTodayDate(date)} />
    </h3>
  );
}

export default Calendar;

// const Wrapper = styled.wrapper`

// `