// import React, { useState } from 'react';
// import styled from 'styled-components'
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'
import React from 'react'
import toDos from 'reducers/toDos';
// import DatePicker from 'react-date-picker';

const Calendar = () => {
  // const [todayDate, setTodayDate] = useState(new Date());

  return (
    <h3> Today is a new day ☘️
      {/* <DatePicker selected={todayDate} onChange={(date) => setTodayDate(date)} /> */}
      <p className="moment">
        {moment(toDos.createdAt).format('LL')}
      </p>
    </h3>
  );
}

export default Calendar;

// const Wrapper = styled.wrapper`

// `