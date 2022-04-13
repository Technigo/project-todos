import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { devices } from "styles";
import { TaskCard, TaskWrapper } from "./TaskList";

const NrOfTask = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-left: 20px;

  @media ${devices.tablet} {
    font-size: 20px;
    font-weight: 600;
    margin-left: 15%;
  }
`;

const TaskCounter = () => {
  const taskToDo = useSelector((store) => store.tasks.items);
  const remainingToDo = taskToDo.filter((toDo) => toDo.isComplete === false);

  if (taskToDo.length > 0) {
    return (
      <div>
        <NrOfTask>{remainingToDo.length} Tasks To Do </NrOfTask>
      </div>
    );
  } else if (remainingToDo.length === 0) {
    return (
      <TaskWrapper>
        <TaskCard>
          <p>Let's sdd something to your To Do list</p>
        </TaskCard>
      </TaskWrapper>
    );
  }
};
export default TaskCounter;
