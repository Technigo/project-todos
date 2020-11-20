import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos';


const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.list.items[itemIndex])
  
  const dispatch = useDispatch();

  //Remove todos from list
  const onRemoveTodo = () => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex,
      })
    )
  }

  //Mark todo as complete 
  const handleChange = () => {
    dispatch (
      todos.actions.setComplete({
        itemIndex: itemIndex,
        complete: !item.complete
      }) 
    )
  }

  return (
    <>
      <input 
        type="Checkbox"
        onChange={handleChange}
        className="todo__item-checked"
        checked={item.complete ? "checked" : ""}
      >
      </input>
      <span className="todo__item-description">{item.description}</span> 
      <a className="todo__item-delete" onClick={onRemoveTodo}>
        Remove
      </a>
    </>
  )
}
export default TodoItem
/* 
- Get the item from the store based on index
- create the onRemoveClick handler 
- Create the onChange handler to handle done status 

*/