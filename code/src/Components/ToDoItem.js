import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';

export const ToDoItem = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((store) => store.todoitem.items)

  //Add todoitems by mapping the items in the todolist in the store
  return (


    allItems.map(item => {
      return (
        <>
          <p>{item.name}</p>
          <button onClick={() => { dispatch(todoitem.actions.removeItem(item)) }}>remove</button>
        </>
      )
    })

  )
}