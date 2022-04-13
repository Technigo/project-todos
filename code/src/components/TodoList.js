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
    dispatch(todos.actions.toggleItem(todoId));
  };

  const onTodoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index));
  };

  return (
    <TodoSection>
      <h2>Your todos: &nbsp; {todoList.length}</h2>
      {todoList.map((todoItem, todoIndex) => (
        <TodoItem key={todoItem.id}>
          <h2>{todoItem.title}</h2>
            <DoneButton 
              type="checkbox" 
              id={todoItem.id}
              checked={todoItem.isDone}
              onChange={() => onTodoToggle(todoItem.id)} />
            <label htmlFor={todoItem.id}>Do it!</label>
          <DeleteButton onClick={() => onTodoDelete(todoIndex)}>
            <span 
              role="img" 
              aria-label="delete">
              ❌
            </span>
          </DeleteButton> 
        </TodoItem>
      ))}
    </TodoSection>
  )
}

export default TodoList;