import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from 'reducers/todos';
import image from 'assets/check.png'

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

const DoneButton = styled.input`
  opacity: 0;

  + label {
    position: relative;
    padding-left: 10px;
    cursor: pointer;
    display: inline-block;
    color: #666;
    line-height: 25px;
    &:before, &:after {
      content: "";
      position: absolute;
      left: -18px;
      top: 2.5px;
      width: 18px;
      height: 18px;
      border-radius: 20%;
    }
    &:before {
      outline: 2px solid #aaa;
    }
  }
    &:checked + label:before {
      outline: 2px solid #097969;
  }
    &:checked + label {
    color: #097969;
    text-decoration: line-through;
}
    &:checked + label:after {
      background-image: url(${image});
      background-size: contain;
      transform: scale(0.8);
      opacity: 1;
      transition: all .3s ease;
  }
    &:not(:checked) + label:after {
      transform: scale(0);
      opacity: 0;
}
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
            <DoneButton 
              type="checkbox" 
              id={todoItem.id}
              checked={todoItem.isDone}
              onChange={() => onTodoToggle(todoItem.id)} />
            <label htmlFor={todoItem.id}>Do it!</label>
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