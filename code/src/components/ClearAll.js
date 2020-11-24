import React from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'

const ClearAll = () => {
  const dispatch = useDispatch()
  return (
    <button onClick={() => dispatch(todoList.actions.clearAllTask())}>
      Clear all tasks
    </button>
    );
}
 
export default ClearAll;