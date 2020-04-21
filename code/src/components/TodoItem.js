import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { useSelector } from 'react-redux'
import { Article } from '../lib/Container'


export const TodoItem = ({ itemIndex }) => {
  
const item = useSelector(store => store.todos.list.items[itemIndex])
const dispatch = useDispatch()
  //Get the item from the store based on the index
const onRemoveClicked = event => {
  dispatch(
    todos.actions.removeTodo({
      itemIndex: itemIndex
    })
  )
}




  //Create the onChange handler for handling the done status
  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    )
  }

  return (
    <Article className={`todo-item ${item.done ? 'done' : ''}`}>
      <div> 
        <input type='checkbox'
          onChange={handleOnChange}
          className='todo-item-check'
          checked={item.done ? 'checked' : ''} 
        >
        </input>
        <span className='todo-item-description'>{item.description}</span>
      </div> 
      <a className='todo-item-remove' onClick={onRemoveClicked}>🗑</a>
    </Article>
  )
}