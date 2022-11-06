import React from 'react';
import styled from 'styled-components/macro';
import { Wrapper, Actionbtn } from 'styles/GlobalStyles';

import todos from '../reducers/todos';

/* import Checkbox from './Checkbox'; */

const Todo = ({ incomplete, allTodos, dispatch }) => {
  const completeAll = () => {
    allTodos.forEach(() => {
      dispatch(todos.actions.completeAllItems())
    })
  };

  const removeAll = () => {
    const userConfirm = window.confirm('Do you want to remove all tasks?')
    if (userConfirm) {
      dispatch(todos.actions.removeAll());
    }
  };

  return (
    <Wrapper>
      <p>You have {incomplete} out of {allTodos.length} tasks to complete.</p>
      <FlexContainer>
        <Actionbtn
          color="#07B7F9"
          type="button"
          onClick={() => completeAll()}>
        Complete all
        </Actionbtn>

        <Actionbtn
          color="#5907F9"
          type="button"
          onClick={() => removeAll()}>
        Remove all
        </Actionbtn>
      </FlexContainer>
    </Wrapper>
  )
};

export default Todo

const FlexContainer = styled.div`


`;