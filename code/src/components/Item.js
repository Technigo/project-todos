import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

import styled from 'styled-components'

const AllTasks = styled.div`
  display:flex;
  justify-content:center;
`

const ListActionButton = styled.button `
   align-self: center; 
   padding: 4px;
   margin: 2px; 
   font-size: 22px; 
`

const TodoContainer = styled.li`
  display:flex;
  flex-direction:row; 
  justify-content: space-between;
  padding:10px;
  margin:10px;
  font-size: 18px;
  background-color:green;
  border-radius: 3px;
  width:80%;

  @media (min-width: 700px) and (max-width: 1024px) {
    width: 40%
  }

  @media (min-width:1025px) {
    width:30%
  }
`

const TodoText = styled.text `
  font-size: 18px;
`

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todos.actions.removeItem(item.id))
  }

  return (
  <AllTasks>
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

   <button type="button" onClick={handleRemoveButtonClick}>
    Remove
   </button>
  </TodoContainer>
  </AllTasks>
  )
}

/*
{item.id}
*/