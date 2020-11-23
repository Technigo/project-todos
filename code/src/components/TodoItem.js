import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from "moment";

 
export const TodoItem = ({itemIndex}) =>{

  const item = useSelector(store => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();

  const handleRemoveClick = (e) =>{
    dispatch(todos.actions.removeTask({
      itemIndex : itemIndex
    }))
  }

  const handleOnChange = (e) => {
      dispatch(todos.actions.setTaskDone({
        itemIndex : itemIndex,
        done: !item.done
      }))
  }

  return(
    <li className={item.done ? "todo-item-done" : "todo-item"}>
      <div className="item-text-wrapper">

   
      <div className="item-wrapper">
          <label className="item-label">
            <input 
          type="checkbox"
          onChange={handleOnChange}
          className="todo-item-checkbox"
          checked={item.done ? "checked" : "" }
          >
          </input>
          <span className="todo-item-text">{item.text}</span></label>   
         
      </div>

     <div className="item-dates">
       <span className="todo-date-created">Created: {moment(item.created).fromNow()}</span>
       <span className={moment(item.dueDate).endOf('day') < moment() ? 'todo-past-due': 'todo-pre-due'}>Due: {moment(item.dueDate).endOf('day').fromNow()}</span>
     </div>
     </div>
     <div className="item-button-wrapper">
      <button className="todo-item-remove-button" type="button" onClick={handleRemoveClick}>-</button>
     </div>
    
    </li>
  )
}