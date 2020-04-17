import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  const onRemoveClicked = event => { }

  const handleOnChange = event => { }

  return (
    <div>
      <input
        type='checkbox'
        onChange={handleOnChange}
        checked='checked'
      ></input>
      <span>{item.description}</span>
      <a onClick={onRemoveClicked}>Remove</a>
    </div>
  )
}