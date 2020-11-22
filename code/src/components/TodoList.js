import React, { useEffect, useState } from 'react'

import { TodoItem } from './TodoItem.js'
import { TodoSummary } from './TodoSummary.js';
import { TodoInput } from './TodoInput.js';
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos.js';



export const TodoList = () => {
  // Get list info for this list form the (global) redux store
  const list = useSelector((store) => store.todos.list) 
  // That is the object we want the variable 'list' to be.
  // Look in state tree for path!!!
  const dispatch = useDispatch()
/*
- Show TodoInput
- Show each TodoItem in the List
- Show TodoSummary
*/

/*
dispatch(
  todos.actions.clearAll()
)
*/
return (
  <section className='todo-list'>
    <TodoInput />
    {list.items.map((item, index) => (
      <TodoItem item={item.text} itemIndex={index}></TodoItem>
    ))}
    <input 
          type='submit'
          className='clear-all-button'
          value='Clear all'
        ></input>
  </section>
);
};




