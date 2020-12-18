import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { Button } from "lib/Button";
import { CustomCheckbox } from "./CustomCheckbox";
import { todos } from "../reducers/todos";


const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  padding: 10px;
  border: solid 2px #786253;
  box-shadow: 8px 5px;
  border-radius: 5px;
  width: 320px;
  height: auto;
  margin: 6px 25px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
`;

const TodoInputText = styled.div`
  padding: 5px;
`;

export const TodoItem = ({ id, name, isCompleted }) => {
  const dispatch = useDispatch();

  const onTodoDelete = () => {
    dispatch(todos.actions.removeItem(id));
  };

  const onIsCompletedChange = () => {
    console.log(todos)
    dispatch(todos.actions.toggleComplete(id));
  };

  return (
    <ItemList>
      <CustomCheckbox checked={isCompleted} onCheckboxClick={onIsCompletedChange} />
      <TodoInputText>{name}</TodoInputText>
      <Button onClick={onTodoDelete}>Done it</Button>
    </ItemList>
  );
 
};



