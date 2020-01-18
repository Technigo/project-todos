import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <Button type="button" onClick={() => dispatch(tasks.actions.removeAll)}>
      Remove all
      </Button>
  )
}

const Button = styled.button`
background-color: black;
color: white;
font-size: 20px; 
align-item: right; 
margin-top: 20px; 
margin-right: 20px; 
border-radius: 50px;
width: 150px;
height: 35px; 
float: right;
`
