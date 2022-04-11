import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from 'reducers/todos';

const TodoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoItem = styled.article`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  position: relative;
  width: 50%;
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
    dispatch(todos.actions.toggleItem(todoId))
  };

  return (
    <TodoSection>
      {todoList.map(todoItem => (
        <TodoItem key={todoItem.id}>
          <h2>{todoItem.title}</h2>
          <label>
            Is done:
            <input 
              type="checkbox" 
              checked={todoItem.isDone} 
              onChange={() => onTodoToggle(todoItem.id)} />
          </label>
          <DeleteButton>
            <span role="img" aria-label="delete">
              ❌
            </span>
          </DeleteButton> 
        </TodoItem>
      ))}
    </TodoSection>
  )
}

export default TodoList;