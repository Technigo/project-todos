import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import swal from 'sweetalert';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { todos } from '../reducers/todos';

const ActionButtons = () => {
  const [isAllComplete, setIsAllComplete] = useState(false)
  const dispatch = useDispatch();

  const handleOnComplete = () => {
    dispatch(todos.actions.setAllComplete())
    setIsAllComplete(true)
  }

  const handleUnsetComplete = () => {
    dispatch(todos.actions.setAllUnComplete())
    setIsAllComplete(false)
  }

  const handleOnRemove = () => {
    swal({
      title: "Are you sure?",
      text: "Do you want to delete all your todos?",
      icon: "warning",
      dangerMode: true, //mark "delete" red and set focus to "cancel" if buttons are used
      buttons: true, //gives us two buttons 
    })
    .then(willDelete => {
      if (willDelete) {
        dispatch(todos.actions.removeAllTodos())
        swal("Deleted!", "Your todos has been deleted", "success");
      } else {
        swal("They are still there!", "Your todos are in working progress")
      }
    });
  }

  return (
    <ButtonContainer>
      <Button 
        type="button"
        onClick={!isAllComplete ? () => handleOnComplete() : () => handleUnsetComplete()}
        >
          <ButtonText>{!isAllComplete ? "Mark all complete" : "Unset completed"}</ButtonText>
      </Button>
      <Button 
      type="button"
      onClick={() => handleOnRemove()}
      >
        <ButtonText>Delete all todos</ButtonText>
      </Button>
    </ButtonContainer>
  )
}
export default ActionButtons;

const ButtonContainer = styled.div `
  display: flex; 
  justify-content: space-between;
`;

const ButtonText = styled.p`
  font-size: 16px;
`;
  
 
      
 