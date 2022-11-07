import React, {/* { useState } */} from 'react';
// import ReactDatePicker from 'react-datepicker';

const Header = () => {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="headerbox">
      <h1>Todo</h1>
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
      <h2>November 8th</h2>
      <h3>4 tasks</h3>
      <h4>CLEAR ALL</h4>
    </div>
  );
};

export default Header;