import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import styled from "styled-components";

const TaskListSection = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const EmptyListImg = styled.img`
  width: 200px;
  margin: 80px auto;
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
