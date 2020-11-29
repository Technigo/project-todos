import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { tasks } from 'reducers/tasks'


export const RemoveTasks = () => {

  const items = useSelector((store) => store.tasks.items);
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(tasks.actions.removeAll())
  }

  const handleRemoveChecked = () => {
    dispatch(tasks.actions.removeChecked())
  }

  return (
    <ButtonWrapper>
    <DeleteAllButton onClick={handleRemoveAll} disabled={!enabled}> 
      Delete all!
    </DeleteAllButton>
    <DeleteCheckedButton onClick={handleRemoveChecked}>
      Delete completed tasks
    </DeleteCheckedButton>
    </ButtonWrapper>
  );
};


const ButtonWrapper = styled.section`
 /* background: #f1f1f1; */
  position: absolute;
    align-items: center;
    bottom: 10px;
    /* height: 30px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 600px;
    height: 2.5rem; */
 `
const DeleteAllButton = styled.button`
width: 100px;
height: 40px;
background: #fdc1c5;
margin-left: 10px;
`
const DeleteCheckedButton = styled.button`
width: 150px;
height: 40px;
background: #fdc1c5;
margin-left: 40px;
`
