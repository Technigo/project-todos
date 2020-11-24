import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Task } from "./Task";
import styled from "styled-components";
import { todos } from "reducers/todos";
import { AddTask } from "./AddTask";

const ListContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
// const ListActionButton = styled.button`
//   align-self: center;
//   padding: 4px;
//   margin: 2px;
//   font-size: 22px;
// `;

export const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.todos.tasks);

  return (
    <ListContainer>
      {tasks.map((task, index) => (
        <Task key={index} task={task}></Task>
      ))}
      {/* <ListActionButton onClick={() => dispatch(todos.actions.removeOne())}>
        Remove One
      </ListActionButton> */}
      <AddTask />
    </ListContainer>
  );
};
