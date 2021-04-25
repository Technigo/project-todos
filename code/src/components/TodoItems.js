import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { todos }  from "../reducers/todos";

const ItemContainer = styled.div `
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-weight: 500;
`;

const DeleteButton = styled.span `
    background:linear-gradient(25deg, #2BC0E4 0%, #EAECC6 100%);
    font-size: 12px;
    padding: 3px;
    margin-left: 3px;
    border-radius: 5px;
    border:2px solid #fff;
    color: #fff;
`;

export const TodoItems = ({ itemIndex }) => {
  const item = useSelector((store) => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();

  const handleCheckbox = (event) => {
    dispatch(
      todos.actions.toggleComplete({
        itemIndex: itemIndex,
        isComplete: !item.isComplete,
      })
    )
  }

  const handleDelete = (event) => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex,
      })
    )
  }

  return (
    <ItemContainer>
      <div>
        <input
          type="checkbox"
          onChange={handleCheckbox}
          checked={item.isComplete ? "checked" : ""}
        />
        <span>{item.text}</span>
      </div>
      <DeleteButton onClick={handleDelete}> Delete </DeleteButton>
    </ItemContainer>
  )
}