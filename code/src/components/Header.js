import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: beige;
  padding: 0.5em;
`;

const Header = () => {
  const todoListItems = useSelector((store) => store.todos.todoListItems);
  const completedListItems = todoListItems.filter(
    (listItem) => listItem.isComplete
  );
  const uncompletedListItems = todoListItems.filter(
    (listItem) => !listItem.isComplete
  );

  //   const dispatch = useDispatch();

  return (
    <StyledHeader>
      <div>
        <h1>ToDo</h1>
        <p>{moment().format('LL')}</p>
      </div>
      <div>
        <p>{todoListItems.length} tasks in list</p>
        <p>Tasks left to do: {uncompletedListItems.length}</p>
        <p>Completed tasks: {completedListItems.length} </p>
      </div>
    </StyledHeader>
  );
};

export default Header;
