import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

import { Button } from 'styling/Button';

const ButtonWrapper = styled.div`
text-align:center;
`

export const RemoveAll = () => {
    const dispatch = useDispatch();
    const handleRemoveAll = () => {
        dispatch(todos.actions.removeAll())
      }
    return (
      <ButtonWrapper>
        <Button 
        onClick={handleRemoveAll} 
        >
        Clear tasks
        </Button>
      </ButtonWrapper>
    );
};