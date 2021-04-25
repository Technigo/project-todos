import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const SelectDeadline = ({ setDue, setHasDeadline }) => {
  const initialTime = new Date(Date.now()).toISOString().split("T")[0];
  const [dueClock, setDueClock] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [expand, setExpand] = useState(false);

  const handleChange = (e, type) => {
    setDueDate(initialTime)
    setDueClock("08:00")
    if (type === "date") {
      setDueDate(e.target.value);
    } else {
     setDueClock(e.target.value);
    }
    setHasDeadline(true);
    setDue(`${dueDate} ${dueClock}`);
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
          value={dueDate}
          min={initialTime}
          max="2025-01-01"
          onChange={(e) => handleChange(e, "date")}
        />
        <Time
          id="deadline-clock"
          name="deadline-clock"
          value={dueClock}
          onChange={(e) => handleChange(e, "clock")}
        />
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
