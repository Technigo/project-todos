import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from 'reducers/tasks'
import 'css/buttons.css'

export const ClearButton = () => {
  const dispatch = useDispatch()
  const allTasks = useSelector((state) => state.tasks)

  return (
    <>
      {allTasks.length !== 0 && (
        <button
          className="btn-clear"
          type="button"
          onClick={() => dispatch(tasks.actions.removeAll())}>
            Remove all
        </button>
      )}
    </>
  )
}