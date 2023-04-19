import React from 'react'
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks'
import styled from 'styled-components/macro'

const StyledCheckbox = styled.input``

const CheckBox = ({ id }) => {
  const dispatch = useDispatch();
  const checkComplete = () => {
    dispatch(tasks.actions.completeTask(id))
  }
  return (

    <StyledCheckbox type="checkbox" text="completed?" onClick={checkComplete} />
  );
}

export default CheckBox;