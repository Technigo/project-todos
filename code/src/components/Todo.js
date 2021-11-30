import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { todos } from "../reducers/Todos";
import { TodoContainer, RemoveButton, TodoTitle, TodoItem, TimeStamp, DueDate } from "./StyledComponents";
import { Checkbox, CustomCheckbox } from "./CheckboxStyling";

export const Todo = ({ text, complete, todo }) => {
  const dispatch = useDispatch();
  const check = () => {
    dispatch(todos.actions.checkTodo(todo));
  };

  return (
    <TodoContainer>
      <TodoItem checked={complete}>
        <Checkbox type="checkbox" checked={complete} onChange={check} />
        <CustomCheckbox checked={complete}></CustomCheckbox>
        <TodoTitle checked={complete}>{text}</TodoTitle>
        <TimeStamp>{moment(todo.date).format("MMM Do")}</TimeStamp>
        <DueDate due={todo.due}>{todo.due ? `Due ${moment(todo.due).fromNow()}` : " "}</DueDate>
      </TodoItem>
      <RemoveButton onClick={() => dispatch(todos.actions.removeThisTodo(todo))}>X</RemoveButton>
    </TodoContainer>
  );
};
