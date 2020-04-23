import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoStore } from '../reducers/todoStore'


export const RemoveAllButton = () => {
  const item = useSelector((store)=> store.todoStore)
  console.log(item)
  const dispatch = useDispatch()
  
  
  const removeOnClick = (event) => {
    dispatch(todoStore.actions.removeAllItems())
      
    
  }

  return(
    <a 
    className="remove-all-todo"
    onClick={removeOnClick}>Remove all todos</a>
  )
}