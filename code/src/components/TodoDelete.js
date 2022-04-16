import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask } from 'reducers/tasks'

export const TodoDelete = ({ todoItem }) => {

  const dispatch = useDispatch();

  const removeTask = () =>{
      dispatch(
          deleteTask({
              id: todoItem.id
          })
      )
  }

  return (
    <div style={{backgroundColor: 'pink'}}>
        <button onClick={removeTask}>
            Delete task
        </button>
    </div>
  )
}
