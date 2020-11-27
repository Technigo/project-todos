import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const ActionBar = () => {
  const [isAllComplete, setIsAllComplete] = useState(false);
  const dispatch = useDispatch();

  const handleOnComplete = () => {
    dispatch(todos.actions.setAllComplete());
    setIsAllComplete(true);
  };

  const handleOnNotComplete = () => {
    dispatch(todos.actions.setAllNotComplete());
    setIsAllComplete(false);
  };

  const handleOnRemove = () => {
    swal({
      title: 'Are you sure?',
      text: 'Do you want to remove all your todos?',
      icon: 'warning',
      dangerMode: true,
      buttons: true,
    }).then(willDelete => {
      if (willDelete) {
        dispatch(todos.actions.removeAllTodos());
      }
    });
  };

  return (
    <ActionBarContainer>
      <ActionBarButton
        type="button"
        onClick={
          isAllComplete ? () => handleOnNotComplete() : () => handleOnComplete()
        }
      >
        <ActionBarText>
          {!isAllComplete ? 'Check All Todos' : 'Uncheck All Todos'}
        </ActionBarText>
      </ActionBarButton>
      <ActionBarButton type="button" onClick={() => handleOnRemove()}>
        <ActionBarText>Delete All Todos</ActionBarText>
      </ActionBarButton>
    </ActionBarContainer>
  );
};

export default ActionBar;

const ActionBarContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
`;

const ActionBarButton = styled(Button)`
  background: #fff;
`;
const ActionBarText = styled.p``;
