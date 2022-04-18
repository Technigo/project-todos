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
    <div>
        <button onClick={removeTask} style={{backgroundColor: 'white', border: '1px solid red', color: 'red', borderRadius: '50px'}}>
            Delete task
        </button>
    </div>
  )
}
