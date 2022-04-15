import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const TodoItem = styled.article`
  border: 1px solid black;
  background-color: rgb(255, 255, 255, 0.5);
  padding: 10px;
  margin: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  width: 50%;
  text-align: left;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onTodoToggle = (todoId) => {
    dispatch(todos.actions.toggleItem(todoId));
  };

  const onTodoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index));
  };

  return (
    <section>
      {todoList.map((todoItem, todoIndex) => (
        <TodoItem key={todoItem.id}>
          <h4>{todoItem.Todo}</h4>
          <label>
            Done: &nbsp;&nbsp;
            <input
              type="checkbox"
              checked={todoItem.isDone}
              onChange={() => onTodoToggle(todoItem.id)}
            />
          </label>
          <DeleteButton onClick={() => onTodoDelete(todoIndex)}>
            <span role="img" aria-label="delete">
              X
            </span>
          </DeleteButton>
        </TodoItem>
      ))}
    </section>
  );
};

export default TodoList;
