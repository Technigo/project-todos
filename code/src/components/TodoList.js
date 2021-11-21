import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const DeleteButton = styled.button`
  appearance: button;
  background-color: #ea86b6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #e05297;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter 0.2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  :after {
    background-clip: padding-box;
    background-color: #f3bad6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  :main,
  :focus {
    user-select: auto;
  }
  :hover:not(:disabled) {
    filter: brightness(1.1);
  }
  :disabled {
    cursor: auto;
  }
  :active:after {
    border-width: 0 0 0px;
  }
  :active {
    padding-bottom: 10px;
  }
`;
const BigStyle = styled.div`
  color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  //   //v1
  const onDeleteTodoMutability = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };
  //v2
  //   const onDeleteTodoImmutability = (id) => {
  //     dispatch(todos.actions.deleteTodo(index));
  //   };
  const date = new Date();
  const todaysDate = date.toString().slice(0, 10);

  return (
    <BigStyle>
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <p>{item.text}</p>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <DeleteButton onClick={() => onDeleteTodoMutability(index)}>
            Delete
          </DeleteButton>
          <p>Posted: {todaysDate}</p>
        </div>
      ))}
    </BigStyle>
  );
};

export default TodoList;
