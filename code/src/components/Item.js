import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const Item = ({ itemIndex }) => {
  const dispatch = useDispatch()

  const item = useSelector((store) => store.todos.list.todoItems[itemIndex])

  const onRemoveClicked = event => {
   dispatch(todos.actions.removeTodoItem({
     itemIndex: itemIndex
   }))
  }

  const handleOnChange = event => {
    dispatch(todos.actions.setDone({ 
      itemIndex: itemIndex,
      done: !item.done
    }))
  }
/*van video 1.09 ternary operator className */
  return (
    <div>
      <input
        type='checkbox'
        onChange={handleOnChange}
        checked={item.done ? 'checked' : ''}
      />
      <p>{item.description}</p>
      <button onClick={onRemoveClicked}>remove</button>
    </div>
  )
}