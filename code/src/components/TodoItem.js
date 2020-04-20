import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import './todo.css'


export const TodoItem = ({itemIndex}) => {
const item = useSelector(store => store.todoStore.list.items[itemIndex])
const dispatch = useDispatch()
const removeOnClick = event => {
  
}
const handleOnChange = event => {
  dispatch(
    todoStore.actions.setDone({
  //here comes the payload...
    itemIndex: itemIndex,
    done: !item.done
    })
    )
  }

return (
<div className={`todo-item ${item.done ? "done" : ""}`}>
<input
type='checkbox'
onChange={handleOnChange}
className='todo-check'
checked={ item.done ? 'checked' : '' } />
<span className='todo-description'>{item.description}</span>
<a className='remove-todo-button'
onClick={removeOnClick}
>[Remove]</a>
</div>
)
}