import React from 'react'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"


const AddDate = ({ setDueDate, dueDate }) => {
  return (
    <label>
      Due date (optional)
      <div>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
        />
      </div>
    </label>
  );
};

export default AddDate;