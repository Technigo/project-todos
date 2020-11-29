import React from "react";
import { useSelector } from "react-redux";
import { Task } from "./Task";

import styled from "styled-components";

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0;
`;

export const TaskList = () => {
  const tasks = useSelector((store) => store.todos.tasks);

  return (
    <ListContainer>
      {tasks.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}
    </ListContainer>
  );
};
