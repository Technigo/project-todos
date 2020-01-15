import React from "react";
import { useSelector } from "react-redux";
import { Task } from "components/Task";
import styled from "styled-components";

export const List = () => {
  const taskStore = useSelector(store => store.tasks.tasks);

  return (
    <TaskList>
      {taskStore.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </TaskList>
  );
};

const TaskList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;
