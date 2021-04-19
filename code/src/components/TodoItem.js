import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #A9A4A6; 
  border-top: 1px solid #A9A4A6;
  font-family: 'Montserrat', sans-serif;
`

const Input = styled.input`
  height: 35px;
  width: 35px;
  z-index: 1;
  opacity: 0;
`

const Indicator = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  margin-left: 5px;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #8B98F9;
  
  &::before {
    content: '';
    width: 35px;
    height: 35px;
    position: absolute;
    border-radius: 50%;
    background-color: #8B98F9;
    display: none;
    top: -1.5px;
    left: -2px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 16px;
    border: solid #fff;
    border-width: 0 4px 4px 0;
    top: 4px;
    left: 10px;
    transform: rotate(45deg);
    display: none;
  }

  
  ${Input}:checked + &::after {
    display: block;
  }

  ${Input}:checked + &::before {
    display: block;
  }
`

const Description = styled.p`
  font-size: 20px;
`


const TodoItem = ({ id, text, complete }) => {
  const dispatch = useDispatch()

  return (
    <Container key={id}>
      <Input
        type="checkbox"
        checked={complete}
        onChange={() => dispatch(tasks.actions.toggleComplete(id))}
      />
      <Indicator />
      <Description>{text}</Description>
    </Container>
  )     
}

export default TodoItem
