import React from 'react'
import { useDispatch } from 'react-redux'
import  { todos } from 'reducers/todos'

import { CheckBox } from './Checkbox'
import { TodoContainer, TodoText, Container } from '../styling/ItemStyling'
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
      <CheckBox isChecked={item.complete ? 'checked' : "" } onChange={handleCheckboxClick}/>
        <TodoText>{item.text}</TodoText>
          <button 
            type="button"
            className="remove"
            onClick={handleRemoveButtonClick}>
            <img src={Trash} alt="trashcan"/>
          </button>
    </TodoContainer>
  </Container>
  )
}


