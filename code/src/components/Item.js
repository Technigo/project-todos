import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

import { Container } from '../shared/Container'
import { TodoContainer, TodoText } from '../styling/ItemStyling'

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
      <TodoText>
        {item.text}
      </TodoText>
    
      <label className ="checkBox"> 
        <input
          type="checkbox"
          checked = {item.completed}
          onChange= {handleCheckboxClick}/>
      </label>

        <button 
          type="button"
          onClick={handleRemoveButtonClick}>
          Remove
        </button>
    </TodoContainer>
  </Container>
  )
}

/*
{item.id}
*/