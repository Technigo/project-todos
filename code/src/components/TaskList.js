import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import styled from "styled-components";

const TaskListSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 70vh;
  overflow: auto;

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

const EmptyListImg = styled.img`
  width: 200px;
  margin: 60px auto;
  opacity: 15%;
`;

const TaskList = () => {
  const tasks = useSelector((store) => store.listSlice.items);

  return (
    <TaskListSection>
      {tasks.length === 0 && (
        <EmptyListImg src="../../images/clipboard.png" alt="empty clipboard" />
      )}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </TaskListSection>
  );
};

export default TaskList;
