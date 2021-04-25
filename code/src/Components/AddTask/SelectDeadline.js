import React, { useState } from "react";
import styled from "styled-components";

import { Checkbox } from "../../Components/Selects/Checkbox";

let date, time;

export const SelectDeadline = ({ setDue, setHasDeadline }) => {
  const initialTime = new Date(Date.now()).toISOString().split("T")[0];
  const [expand, setExpand] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (e, type) => {
    date = initialTime;
    time = "08:00";
    if (type === "date") {
      date = e.target.value;
    } else {
      time = e.target.value;
    }
    setHasDeadline(true);
    setDue(`${date} ${time}`);
    setChecked(false);
  };

  const handleCheck = () => {
    setChecked(!checked);
    date = "";
    time = "";
    setHasDeadline(false);
    setDue("");
  };

  return (
    <Container>
      <Button expand={expand} onClick={() => setExpand(!expand)}>
        Due
      </Button>
      <DateWrapper expand={expand}>
        <Calendar
          id="deadline"
          name="deadline"
          value={date}
          min={initialTime}
          max="2025-01-01"
          onChange={(e) => handleChange(e, "date")}
        />
        <Time
          step="3600"
          min="00:00"
          id="deadline-clock"
          name="deadline-clock"
          value={time}
          onChange={(e) => handleChange(e, "clock")}
        />
        <Label htmlFor="NoDeadline">
          <Checkbox
            checked={checked}
            id="NoDeadline"
            type=""
            color="darkcyan"
            onChange={() => handleCheck()}
          />
          Infinite
        </Label>
      </DateWrapper>
    </Container>
  );
};

const Button = styled.button`
  border: none;
  background: white;
  width: 60px;
  color: darkcyan;

  ${(props) =>
    props.expand &&
    `&::after{
    color: rgb(196, 232, 241);
    content: "◀";
    text-align: right;
   float:right;
  }`}

  ${(props) =>
    !props.expand &&
    `&::after{
      color: rgb(196, 232, 241);
      content: "▶";
      text-align: right;
      float:right;
    }`}
`;

const Container = styled.div`
  display: flex;
`;

const DateWrapper = styled.div`
  display: ${(props) => (props.expand ? "flex" : "none")};
`;

const Calendar = styled.input.attrs({ type: "date" })``;

const Time = styled.input.attrs({ type: "time" })``;

const Label = styled.label`
  font-size: 12px;
  padding-left: 10px;
`;
