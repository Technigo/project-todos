import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from '../reducers/todos';
import { StyledDeleteButton } from './StyledButtons';

const StyledList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vh 3vw;
`;

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
`;

// const StyledDeleteBtn = styled.button`
// `;

const TodoList = () => {
  const todoListItems = useSelector((store) => store.todos.todoListItems);

  const dispatch = useDispatch();

  const onToggleCheckbox = (id) => {
    dispatch(todos.actions.toggleCheckbox(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <StyledList>
      {todoListItems.map((listItem) => (
        <StyledListItem key={listItem.id}>
          <input
            type='checkbox'
            checked={listItem.isComplete}
            onChange={() => onToggleCheckbox(listItem.id)}
          />
          <p>{listItem.text}</p>

          <StyledDeleteButton onClick={() => onDeleteTodo(listItem.id)}>
            Delete
          </StyledDeleteButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default TodoList;
