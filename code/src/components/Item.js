import React from 'react'
import { useDispatch } from 'react-redux'
import  { todos } from 'reducers/todos'

import { Container } from '../shared/Container'
import { TodoContainer, TodoText } from '../styling/ItemStyling'
import Trash from '../assets/trash-can.png'

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todos.actions.removeItem(item.id))
  }

  return (
  <Container>
    <TodoContainer>
     
    
      <label className ="checkBox"> 
        <input
          type="checkbox"
          checked = {item.completed}
          onChange= {handleCheckboxClick}/>
      </label>
      <TodoText>
        {item.text}
      </TodoText>

        <button 
          type="button"
          className="remove"
          onClick={handleRemoveButtonClick}>
          
          <img src={Trash} alt="trashcan" />
          
        </button>
    </TodoContainer>
  </Container>
  )
}

/*
{item.id}
*/