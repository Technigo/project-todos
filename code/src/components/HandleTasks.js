import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'



export const HandleTasks = () => {

  const allTasks = useSelector(store => store.tasks.taskArray)
  const dispatch = useDispatch()

  const displayLenght = () => {
    return allTasks.filter((item) => item.complete).length
  }

  return (
    <div>
      Completed: {displayLenght()}/{allTasks.length}
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.removeAllTasks())
      }}>Remove All</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.filterTasks("complete"))
      }}>Filter</button>
    </div>
  )
}
