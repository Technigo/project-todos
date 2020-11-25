import React from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../Reducers/todo'

export const TaskItem = ({ item }) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todo.actions.toggledone(''))
  }

   //deleting one element from the redux store
   const onItemDelete = (id) => {
    dispatch(todo.actions.removeItem(id))
  }
  //const handleRemoveButton = (id) => {
    //dispatch(todo.actions.removeItem(id))
 // }



  return (
    <section className="task-container">
     <span className="task-item">{item}</span>

     <label>
      
        <input
        type='checkbox'
        checked={''}
        onChange={handleCheckboxClick}
        />
      </label>

      <button className="remove-button" type='button' 
      onClick={() => onItemDelete(item.id)}>Delete</button>
        
      
    </section>
  )
}


/*
export const TaskItem = (props) => {
  const { id, text } = props

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todo.actions.toggledone(id))
  }

  const handleRemoveButton = () => {
    dispatch(todo.actions.removeItem(id))
  }
  return (
    
    <li>
      <span>{text}</span>hello
      
      <label>
      
        <input
        type='checkbox'
        checked={props.item.done}
        onChange={handleCheckboxClick}
        />
      </label>

      <button type='button' onClick={handleRemoveButton}>
        X
      </button>
    
    </li>
    
  )
}*/