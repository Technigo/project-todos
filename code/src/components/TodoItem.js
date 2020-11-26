import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';
import moment from 'moment';

import { RemoveButton } from '../lib/RemoveButton';
import { Span } from '../lib/Text';
import { CustomCheckbox } from './CustomCheckbox';

const Wrapper = styled.article`
  display: flex;
  padding: 10px 0;
  border-bottom: 2px solid #e8e8e8;
  justify-content: space-between;
  align-items: center;
`;

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(todo.id));
  };

  const handleRemoveTodo = () => {
    dispatch(todos.actions.removeTodo(todo.id));
  };

  return (
    <Wrapper>
      {/* <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxClick}
        /> */}
      {/* <label> */}
      <CustomCheckbox
        isChecked={todo.completed}
        onChange={handleCheckboxClick}
      />
      {/* </label> */}
      <Span>{todo.text}</Span>
      <Span>{moment(todo.startDate).format('l')}</Span>
      <RemoveButton onClick={handleRemoveTodo}>X</RemoveButton>
    </Wrapper>
  );
};
