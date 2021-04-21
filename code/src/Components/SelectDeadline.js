import React from "react";
import styled from "styled-components";

export const SelectDeadline = ({ dueTime, setDueTime }) => {
  const moment = require("moment");
  const initialTime = moment().format("YYYY-MM-DD");
  return (
    <Calendar
      type="date"
      id="deadline"
      name="deadline"
      value={dueTime}
      min={initialTime}
      max="2025-01-01"
      onChange={(e) => setDueTime(e.target.value)}
    />
  );
};

const Calendar = styled.input.attrs({ type: "date" })`
margin-left: 100px;`;
