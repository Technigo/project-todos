import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { todos } from '../Reducers/todos.js'
import styled from 'styled-components'


export const TaskItem = ({ itemIndex }) => {
  
  const item = useSelector((store) => store.todos.list.items[itemIndex])

  const dispatch = useDispatch ()


  const onRemovedClicked = (e) => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex,
      })
    )      
  }
  
  const handleOnChange = (e) => {
    dispatch(
      todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done,
    })
   )
  }

  const Wrapper = styled.div`
    color: white;
    width: 300px;
    margin: 15px;
    padding: 35px;
    border-radius: 5px;
    background-color: #FF4960;
    display: flex;
    justify-content: space-between;
  &:hover .my__unique__button {
    transform: scale(1.8);   
  `
  const Button = styled.button`
  background-color: #FF4960;
  border:0px;
  margin:5px;
  cursor: pointer;
  `

  
  return(
    
    <div className={`task-item ${item.done ? "done" : ""}`}>

    <Wrapper>
    <input 
      type="checkbox"
      onChange={handleOnChange}
      className="task-item-check"
      checked={item.done ? "checked" : ""}>
    </input>
   

    <span className="task-item-description">{item.description}</span>
    <Button
      className="my__unique__button"
      onClick={onRemovedClicked}>🗑
    </Button>
    </Wrapper>
   
    </div>
  )
}