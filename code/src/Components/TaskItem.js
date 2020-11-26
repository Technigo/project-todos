import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../Reducers/todo'

export const TaskItem = ({ item }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(item.isComplete)
  const handleCheckboxClick = () => {
    setChecked()
    dispatch(todo.actions.setComplete(item.id))
  }

   //deleting one element from the redux store
   const onItemDelete = (id) => {
    dispatch(todo.actions.removeItem({id: item.id}))
  console.log(item.id)}
  //const handleRemoveButton = (id) => {
    //dispatch(todo.actions.removeItem(id))
 // }



  return (
    <section className="task-container">
     <span className="task-item">{item.text}</span>

     <label>
      
        <input
        type='checkbox'
        checked={checked}
        onChange={handleCheckboxClick}
        />
      </label>

      <button className="remove-button" type='button' 
      onClick={() => onItemDelete(item.id)}>Delete</button>
        
      
    </section>
  )
}