import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <Button type="button" onClick={() => dispatch(tasks.actions.removeAll())}>
      Clear all 💣
      </Button>
  )
}

const Button = styled.button`
  background-color: grey;
  color: white;
  font-size: 20px; 
  align-item: center; 
  margin-top: 20px; 
  margin-left: 140px; 
  border-radius: 10px;
  width: 150px;
  height: 35px; 
  float: bottom;
`
