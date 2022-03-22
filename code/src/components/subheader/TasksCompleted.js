import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CompletedTasks = styled.p`
  font-weight: bolder;
  font-family: "Indie Flower", cursive;
  color: whitesmoke;
`;

const TasksCompleted = () => {
  //useSelector
  const completedTasks = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  );

  return <CompletedTasks>Tasks completed: {completedTasks}</CompletedTasks>;
};
export default TasksCompleted;
