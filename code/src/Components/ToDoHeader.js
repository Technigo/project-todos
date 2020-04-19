import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';

export const ToDoHeader = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((store) => store.todoitem.items)

  return (
    <div>
      TodoHeader
      items.length {allItems.length}
      <button onClick={() => dispatch(todoitem.actions.removeAll())}>remove all</button>
    </div>
  )
}