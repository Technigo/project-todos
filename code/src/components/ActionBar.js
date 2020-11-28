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
          {!isAllComplete ? 'Check All' : 'Uncheck All'}
        </ActionBarText>
      </ActionBarButton>
      <ActionBarButton type="button" onClick={() => handleOnRemove()}>
        <ActionBarText>Delete All</ActionBarText>
      </ActionBarButton>
    </ActionBarContainer>
  );
};

export default ActionBar;

const ActionBarContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  /* position: absolute; */
  /* bottom: 0; */
  width: 100%;
  padding: 25px;
  margin: 0 auto;
  max-width: 600px;
  background: transparent;
`;

const ActionBarButton = styled(Button)`
  background: #fff;
  border: 2px solid #5c52ac;
  color: #3b2f7d;
  color: #fff;
  background: #5c52ac;
  border-radius: 45px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;

  :hover {
    color: #fff;
    background: #5c52ac;
    box-shadow: 0px 15px 20px rgba(92, 82, 172, 0.4);
    transform: translateY(-5px);
  }
`;
const ActionBarText = styled.p``;
