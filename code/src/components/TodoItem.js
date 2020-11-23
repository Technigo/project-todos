import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const TodoItem = ({itemIndex}) =>{

  const item = useSelector(store => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();
  
  const handleRemoveClick = (e) =>{

  }

  const handleOnChange = (e) => {
      dispatch(todos.actions.setTaskDone({
        itemIndex : itemIndex,
        done: !item.done
      }))
  }

  return(
    <li className="todo-item">
      <input 
      type="checkbox"
      onChange={handleOnChange}
      className="todo-item-checkbox"
      checked="checked"
      >
      </input>
      <span>{item.text}</span>
       {itemIndex} 
       <button type="button" onClick={handleRemoveClick}>Remove Item</button>
    </li>
  )
}