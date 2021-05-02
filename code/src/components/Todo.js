import React from 'react'
import styled from 'styled-components'
import {  useSelector, useDispatch } from 'react-redux'

import todos from 'reducers/todos'

const TodoWrapper = styled.div`
  & {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 10px;
  border-top: solid #999 1px;
  }
  &:last-child {
    margin-left: auto;
  }
  @media (min-width: 767px){
    padding: 20px 48px;
  }
  @media (min-width: 1024px){
    width: 700px;
    margin: auto;
    padding: 20px 0;
  }
`
const CheckContainer = styled.div`
  position: relative;
`
const Label=styled.label`
  & {
    background-color: #FFF;
    border: 1px solid #CCC;
    border-radius: 50%;
    cursor: pointer;
    width: 30px;
    height: 30px;
    left: 0;
    bottom: -25%;
    position: absolute;
  }
  &:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    opacity: 0;
    position: absolute;
    top: 8px;
    transform: rotate(-45deg);
    width: 12px;
  }
  @media (min-width: 767px){
    width: 60px;
    height: 60px;
    bottom: -20px;

    &:after {
      height: 20px;
      top: 15px;
      left: 22px;
      transform: rotate(45deg) scaleX(-1);
    }
  }
  @media (min-width: 1024px){
    width: 40px;
    height: 40px;
    bottom: -10px;

    &:after {
      height: -10px;
      top: 3px;
      left: 12px;
      transform: rotate(45deg) scaleX(-1);
    }
  }
`
const Input = styled.input.attrs({
  type: "checkbox"
})`
  & {
    visibility: hidden;
  }
  &:checked + ${Label} {
    background-color: #66bb6a;
    border-color: #66bb6a;
  }
  &:checked + ${Label}:after {
    opacity: 1;
  }
`
const Text = styled.p`
  font-size: 18px;
  width: 75%;
  margin-left: 23px;
  overflow: auto;
  overflow-wrap: break-word;

  @media (min-width: 767px){
    font-size: 20px;
    margin-left: 76px;
  }
  @media (min-width: 1024px){
    margin-left: 60px;
  }
`
const DeleteBtn = styled.button`
  & {
    background-color: yellow;
    border: none;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding: 1px 0 0 0.5px; 
  }
  &:last-child {
    margin-left: auto;
  }
  
  @media (min-width: 767px){
    width: 60px;
    height: 60px;
    font-size: x-large;
  }
  @media (min-width: 1024px){
    height: 40px;
    width: 40px;
    font-size: large;
  }
`

const Todo = ({ itemIndex }) => {

  const tasks = useSelector(store => store.todos.tasks[itemIndex])

  const dispatch = useDispatch()

  return (
    <TodoWrapper>
      <CheckContainer>
        <Input 
          type="checkbox"
          id={tasks.id}
          checked={tasks.isComplete}
          onChange={() => dispatch(todos.actions.toggleComplete(tasks.id))}
        />
        <Label htmlFor={tasks.id}></Label>
      </CheckContainer>
      <Text>{tasks.text}</Text>
      <DeleteBtn onClick={() => dispatch(todos.actions.removeTodo(tasks.id))}>
        <i className="fas fa-times"></i>
      </DeleteBtn>
    </TodoWrapper>
  )
}

export default Todo
