import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  const onRemoveClicked = event => { }

  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done,
      })
    )
  }

  return (
    <div>
      <input
        type='checkbox'
        onChange={handleOnChange}
        checked={item.done ? 'checked' : ''}
      ></input>
      <span>{item.description}</span>
      <a onClick={onRemoveClicked}>Remove</a>
    </div>
  )
}