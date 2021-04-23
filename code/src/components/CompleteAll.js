import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import todos from 'reducers/todos'

export const CompleteAll = () => {
  const todo = useSelector((store) => store.todos.todo)
  const dispatch = useDispatch() 

  return (
    <div>         
      <button className="complete-all-btn" onClick={()=> dispatch(todos.actions.completeAll())}> Complete all tasks</button> 
    </div>
  )
}