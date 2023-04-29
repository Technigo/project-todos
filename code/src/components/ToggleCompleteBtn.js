import React from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';
import CheckIMG from '../assets/check.svg'

const ToggleCompleteBtn = () => {
  const dispatch = useDispatch();
  const onButtonClick = () => {
    dispatch(tasks.actions.completeAll())
  }
  return (
    <Btndiv>
      <Btn type="button" onClick={onButtonClick}>Toggle all<img alt="check-icon" src={CheckIMG} /></Btn>
    </Btndiv>
  )
}

const Btn = styled.button`
  background-color: rgb(226, 206, 172);
  width: 120px;
  height: 40px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  font-weight: 700;
  color: black;
  filter: invert(1);

  img {
    height: 20px;
    width: 20px;
  }
`

const Btndiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ToggleCompleteBtn