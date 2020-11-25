import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todoList } from '../reducers/todoList'

const ClearAll = () => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(todoList.actions.clearAllTask())}>
      Clear all
    </Button>
    );
}
 
export default ClearAll;

const Button = styled.button`
  background-color: #a8dadc;
  border: 1px solid grey;
  color: #222222;
  font-size: 12px;
  margin-top: 5px;
  ` 