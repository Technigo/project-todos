import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const TodoItem = styled.article`
  border: 1px solid #000000;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
  position: relative;
  background-color: yellow;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
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
          <h2>{todoItem.Todo}</h2>
          <label>
            Done:
            <input
              type="checkbox"
              checked={todoItem.isDone}
              onChange={() => onTodoToggle(todoItem.id)}
            />
          </label>
          <DeleteButton onClick={() => onTodoDelete(todoIndex)}>
            <span role="img" aria-label="delete">
              ❌
            </span>
          </DeleteButton>
        </TodoItem>
      ))}
    </section>
  );
};

export default TodoList;
