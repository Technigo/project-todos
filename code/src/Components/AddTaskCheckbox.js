import React from "react";

import "./AddTaskCheckboxStyle.css";

export const AddTaskCheckbox = ({ setDueTime, checkvalue, setCheckvalue}) => {
  const moment = require("moment");
  const currentTime = moment().format("YYYY-MM-DD");

  const handleChange = (id) => {
    if (id === "no-deadline") {
      setCheckvalue("no-deadline")
      setDueTime("");
    } else {
        setCheckvalue("deadline")
      setDueTime(currentTime);
    }
}

  return (
    <>
      <div className="checkbox-button">
        <div className="checkbox-button__no-deadlinne">
          <input
           checked={checkvalue === "no-deadline"}
            value= "no-deadline"
            type="checkbox"
            name="checkbox"
            id="no-deadline"
            onChange={() => handleChange("no-deadline")}
          />
          <label htmlFor="no-deadline">Infinite</label>
        </div>
        <div className="checkbox-button__deadline">
          <input
            checked={checkvalue === "deadline"}
            type="checkbox"
            name="checkbox"
            id="deadline"
            onChange={() => handleChange("deadline")}
          />
          <label htmlFor="deadline">Set deadline</label>
        </div>
      </div>
    </>
  );
};
