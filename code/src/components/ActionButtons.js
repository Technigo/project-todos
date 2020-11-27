import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import swal from 'sweetalert';
import styled from 'styled-components';

import { Button } from '../lib/Button';
import { ParagraphBlack } from '../lib/Text';
import { todos } from '../reducers/todos';

const ActionButtons = () => {
  const [isAllComplete, setIsAllComplete] = useState(false);
  const dispatch = useDispatch();

  const handleAllComplete = () => {
    dispatch(todos.actions.setAllComplete());
    setIsAllComplete(true);
  };

  const handleUnsetComplete = () => {
    dispatch(todos.actions.setAllInComplete());
    setIsAllComplete(false);
  };

  const handleOnDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Do you want to delete all your todos?",
      icon: "warning",
      dangerMode: true, 
      buttons: true,  
    })
    .then(willDelete => {
      if (willDelete) {
        dispatch(todos.actions.removeAllTodos());
        swal("Deleted!", "Your todos has been deleted", "warning");
      } else {
        swal("They are still there!", "Your todos are in working progress");
      }
    });
  };

  return (
    <ButtonContainer>
      <Button 
        type="button"
        onClick={!isAllComplete ? () => handleAllComplete() : () => handleUnsetComplete()}
        >
        <ParagraphBlack>{!isAllComplete ? "Mark all complete" : "Unset"}</ParagraphBlack>
      </Button>
      <Button 
        type="button"
        onClick={() => handleOnDelete()}
      >
        <ParagraphBlack>Delete all todos</ParagraphBlack>
      </Button>
    </ButtonContainer>
  );
};
export default ActionButtons;

const ButtonContainer = styled.div `
  display: flex; 
  justify-content: space-between;
  margin-top: 40px;
`;