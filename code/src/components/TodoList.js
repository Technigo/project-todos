import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from 'reducers/todos';

import {
  TodoSection,
  TodoItem,
  DoneButton,
  DeleteButton
} from 'Styles';

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