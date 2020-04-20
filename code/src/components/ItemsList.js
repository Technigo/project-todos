import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Item } from './Item'
import { todos } from 'reducers/todos'

export const ItemsList = () => {
  const dispatch = useDispatch()

  // Get all todos from store
  const todosList = useSelector((store) => store.todos.items)


  return (
    <div className="items-list">
      {todosList.map((todo, index) => (
        <Item
          key={index}
          itemIndex={index}
          text={todo.text} />
      ))}

      <button className="btn-clear" onClick={() => {
        dispatch(todos.actions.removeAll())
      }}>
        Clear all
      </button>

    </div>
  )
}

