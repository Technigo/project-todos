import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 45px;
  align-items: flex-start;
`;

const P = styled.p`
  color: #000;
  margin: 0;
`;

const TaskCounter = () => {
  const items = useSelector((store) => store.tasks.items);

  const doneTasks = useSelector((store) =>
    store.tasks.items.filter((item) => item.isComplete === true)
  );

  if (items.length > 0) {
    return (
      <CounterSection>
        <P>You have {items.length} todos</P>
        <P>{doneTasks.length} is completed</P>
      </CounterSection>
    );
  } else if (doneTasks.length === 0) {
    return (
      <CounterSection>
        <P>Your todo list is empty</P>
      </CounterSection>
    );
  }
};

export default TaskCounter;
