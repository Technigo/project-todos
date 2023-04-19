import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const ToggleCompleteBtn = () => {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(tasks.actions.completeAll())
  }
  return (
    <Btndiv>
      <Btn type="button" onClick={onButtonClick}>Toggle all</Btn>
    </Btndiv>
  )
}

const Btn = styled.button`
  background-color: #1D3153;
  color: white;
  width: 80px;
  height: 50px;
  border-radius: 18px;`

const Btndiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ToggleCompleteBtn